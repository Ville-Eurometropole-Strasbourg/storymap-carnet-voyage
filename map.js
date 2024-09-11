let protocol = new pmtiles.Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);


/* First, create two variables that will hold:
1. The different types of layers available to Mapbox and their respective
opacity attributes
2. The possible alignments which could be applied to the vignettes */

var layerTypes = {
  'fill': ['fill-opacity'],
  'line': ['line-opacity'],
  'circle': ['circle-opacity', 'circle-stroke-opacity'],
  'symbol': ['icon-opacity', 'text-opacity'],
  'raster': ['raster-opacity'],
  'fill-extrusion': ['fill-extrusion-opacity']
}
var alignments = {
  'left': 'lefty',
  'center': 'centered',
  'right': 'righty'
}

/* These two functions help turn on and off individual layers (through their
opacity attributes):
The first one gets the type of layer (from a name specified on the config.js file)
The second one adjusts the layer's opacity */

function getLayerPaintType(layer) {
  var layerType = map.getLayer(layer).type;
  return layerTypes[layerType];
}
function setLayerOpacity(layer) {
  var paintProps = getLayerPaintType(layer.layer);
  paintProps.forEach(function (prop) {
    map.setPaintProperty(layer.layer, prop, layer.opacity);
  });
}

/* Next, these variables and functions create the story and vignette html
elements, and populate them with the content from the config.js file.
They also assign a css class to certain elements, also based on the
config.js file */

// Main 'story' and 'features' elements
var story = document.getElementById('story');
var features = document.createElement('div');
features.classList.add(alignments[config.alignment]);
features.setAttribute('id', 'features');

// Main 'header' element
var header = document.createElement('div');

// If the content exists, assign it to the 'header' element
if (config.toptitle) {
  var toptitle = document.createElement('h4');
  toptitle.innerText = config.toptitle;
  header.appendChild(toptitle);
}
if (config.title) {
  var titleText = document.createElement('h1');
  titleText.innerText = config.title;
  header.appendChild(titleText);
}
if (config.byline) {
  var bylineText = document.createElement('p');
  bylineText.classList.add("byline");
  bylineText.innerText = config.byline;
  header.appendChild(bylineText);
}
if (config.description) {
  var descriptionText = document.createElement('p');
  descriptionText.innerHTML = config.description;
  header.appendChild(descriptionText);
}

// If the header has anything in it, it gets appended to the story
if (header.innerText.length > 0) {
  header.classList.add(config.theme);
  header.setAttribute('id', 'header');
  story.appendChild(header);
}

var arrowDown = document.createElement('div');
arrowDown.classList.add("arrow-down");
var leftArrow = document.createElement('div');
leftArrow.classList.add("general-arrow");
leftArrow.classList.add("left-arrow");
var rightArrow = document.createElement('div');
rightArrow.classList.add("general-arrow");
rightArrow.classList.add("right-arrow");
arrowDown.appendChild(leftArrow);
arrowDown.appendChild(rightArrow);
header.appendChild(arrowDown);

/* After building the elements and assigning content to the header these
functions will loop through the chapters in the config.js file,
create the vignette elements and assign them their respective content */

config.chapters.forEach((record, idx) => {
  /* These first two variables will hold each vignette, the chapter
  element will go in the container element */
  var container = document.createElement('div');
  var chapter = document.createElement('div');
  chapter.id = "etape-" + record.id
  // Creates the title for the vignettes
  if (record.title) {
    var title = document.createElement('h3');
    title.innerText = record.title;
    chapter.appendChild(title);
  }
  // Creates the image for the vignette
  if (record.image) {
    var image = new Image();
    image.src = record.image;
    chapter.appendChild(image);
  }
  // Creates the image credit for the vignette
  if (record.imageCredit) {
    var imageCredit = document.createElement('p');
    imageCredit.classList.add('imageCredit');
    imageCredit.innerHTML = 'Crédit: ' + record.imageCredit;
    chapter.appendChild(imageCredit);
  }
  // Creates the description for the vignette
  if (record.description) {
    var story = document.createElement('p');
    story.innerHTML = record.description;
    chapter.appendChild(story);
  }
  // Sets the id for the vignette and adds the step css attribute
  container.setAttribute('id', record.id);
  container.classList.add('step');
  if (idx === 0) {
    container.classList.add('active');
  }
  // Sets the overall theme to the chapter element
  chapter.classList.add(config.theme);
  /* Appends the chapter to the container element and the container
  element to the features element */
  container.appendChild(chapter);
  features.appendChild(container);
});

// Appends the features element (with the vignettes) to the story element
story.appendChild(features);

/* Next, this section creates the footer element and assigns it
its content based on the config.js file */

var footer = document.createElement('div');
// This assigns all the content to the footer element
if (config.footer) {
  var footerText = document.createElement('p');
  footerText.innerHTML = config.footer + '<br>' + config.footerAttribution;
  footer.appendChild(footerText);
}
// If the footer element contains any content, add it to the story
if (footer.innerText.length > 0) {
  footer.classList.add(config.theme);
  footer.setAttribute('id', 'footer');
  story.appendChild(footer);
}

/* This section creates the map element with the
attributes from the main section of the config.js file */

var map = new maplibregl.Map({
  container: 'map',
  style: config.style,
  center: config.chapters[0].location.center,
  zoom: config.chapters[0].location.zoom,
  bearing: config.chapters[0].location.bearing,
  pitch: config.chapters[0].location.pitch,
  scrollZoom: false,
  attributionControl: false,
  //hash: "mapHash"
});

map.addControl(new maplibregl.AttributionControl({
  customAttribution: '<a href="https://www.openstreetmap.org/">📦</a> <b>données</b> par <a href="https://www.openstreetmap.org/copyright"><b>©️ les contributeurs & contributrices OpenStreetMap</b></a>'
}));

// Instantiates the scrollama function
var scroller = scrollama();

/* Here we add the two extra layers we are using, just like in our previous
tutorial. At the end, however, we setup the functions that will tie the
scrolling to the chapters and move the map from one location to another
while changing the zoom level, pitch and bearing */

map.on("load", function () {
  // Setup the instance, pass callback functions
  scroller
    .setup({
      step: '.step',
      offset: 0.5,
      progress: true
    })
    .onStepEnter(response => {
      var chapter = config.chapters.find(chap => chap.id === response.element.id);
      response.element.classList.add('active');
      map.flyTo(chapter.location);
      if (config.showMarkers) {
        marker.setLngLat(chapter.location.center);
      }
      if (chapter.onChapterEnter.length > 0) {
        chapter.onChapterEnter.forEach(setLayerOpacity);
      }
    })
    .onStepExit(response => {
      var chapter = config.chapters.find(chap => chap.id === response.element.id);
      response.element.classList.remove('active');
      if (chapter.onChapterExit.length > 0) {
        chapter.onChapterExit.forEach(setLayerOpacity);
      }
    });
});

/* Here we watch for any resizing of the screen to
adjust our scrolling setup */
window.addEventListener('resize', scroller.resize);
