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

// Function to determine the appropriate logo size based on screen width
function getLogoSize(size) {
  if (window.innerWidth >= 1200) {
    return size.large;  // Large screens
  } else if (window.innerWidth >= 768) {
    return size.medium; // Medium screens
  } else {
    return size.small;  // Small screens
  }
}

// Logo section: This appends logos from the config file to the header
if (config.logos) {
  var logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container'); // Add a CSS class for styling

  config.logos.forEach(logo => {
    var logoLink = document.createElement('a');
    logoLink.href = logo.href;
    logoLink.target = '_blank'; // Open in new tab

    var logoImage = new Image();
    logoImage.src = logo.src;
    logoImage.alt = logo.alt;

    // Set the logo height based on screen size
    logoImage.style.height = getLogoSize(logo.size) + 'px';
    logoImage.style.width = 'auto'; // Maintain aspect ratio

    logoLink.appendChild(logoImage);
    logoContainer.appendChild(logoLink);
  });

  header.appendChild(logoContainer);
}

// Optionally, you can add a window resize listener to adjust logo sizes dynamically
window.addEventListener('resize', function () {
  var logos = document.querySelectorAll('.logo-container img');
  config.logos.forEach((logo, index) => {
    logos[index].style.height = getLogoSize(logo.size) + 'px';
  });
});




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
    title.innerHTML = record.title;
    chapter.appendChild(title);
  }
  // Creates the image for the vignette
  if (record.images) {
    firstImageParams = Object.values(record.images)[0]
    record_alt = firstImageParams.alt;
    var imageDiv = document.createElement('div');
    imageDiv.classList.add("imageDiv");
    var image = new Image();
    image.src = Object.keys(record.images)[0];
    image.alt = `Illustration : ${record_alt}`;
    if ("width" in firstImageParams) {
      imageDiv.style.width = firstImageParams.width;
    };
    image.setAttribute(
      "onclick",
      `openLightbox('${encodeURIComponent(JSON.stringify(record.images))}');currentSlide(1)`
    );
    image.classList.add("hover-shadow");
    image.classList.add("cursor");
    var handClickIcon = new Image();
    handClickIcon.src = "./hand_click.svg"
    handClickIcon.classList.add("handclick");
    imageDiv.appendChild(image);
    if (Object.keys(record.images).length > 1) {
      imageDiv.appendChild(handClickIcon);
    };
    chapter.appendChild(imageDiv);
    // Creates the image credit for the vignette
    var imageCredit = document.createElement('p');
    imageCredit.classList.add('imageCredit');
    imageCredit.innerHTML = `${record_alt} | Crédit: ${firstImageParams.credit}`;
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
  footerText.innerHTML = config.footer + '<br/><br/>' + config.footerAttribution;
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
  crossSourceCollisions: false,
  //hash: "mapHash"
});

map.addControl(new maplibregl.AttributionControl({
  customAttribution: '<a href="https://www.openstreetmap.org/">📦</a> <b>données</b> par <a href="https://www.openstreetmap.org/copyright">\
  <b>©️ les contributeurs & contributrices OpenStreetMap</b></a><br/>\
  <a href="https://github.com/teritrio/teritorio-tourism-gl-style/blob/master/LICENSE.md">🗺️</a> \
  <b>fond de carte</b> par <a href="https://www.teritorio.fr">Teritorio</a> \
  avec le schéma <a href="https://openmaptiles.org/"><b>OpenMapTiles</b></a> \
  <a href="https://maplibre.org/maplibre-gl-js/docs/">🚀</a> \
  <b>affichage</b> de cartes par <a href="https://maplibre.org/maplibre-gl-js/docs/"><b>MapLibre</b></a>'
}));

map.addControl(
  new maplibregl.NavigationControl({
    showZoom: false,
    showCompass: true,
  })
);

// Instantiates the scrollama function
var scroller = scrollama();

/* Here we add the two extra layers we are using, just like in our previous
tutorial. At the end, however, we setup the functions that will tie the
scrolling to the chapters and move the map from one location to another
while changing the zoom level, pitch and bearing */

// Load THREE JS 3d models
load3dModels(map);

map.on('style.load', async () => {

  if (config.layers) {
    config.layers.forEach(lyr => {
      setLayerOpacity(lyr);
    });
  }

  map.addSource('03_Holtzheim', {
    'type': 'image',
    'url': 'https://sig.strasbourg.eu/datastrasbourg/fig2024/03_Holtzheim.png',
    "coordinates": [
      [7.634197166, 48.552052903],  // top left
      [7.637996566, 48.552052903],  // top right
      [7.637996566, 48.548510533],  // bottom right
      [7.634197166, 48.548510533]   // bottom left
    ]
  });

  map.addLayer({
    'id': '03_Holtzheim',
    'source': '03_Holtzheim',
    'type': 'raster'
  });

  // Open the URL in a new tab when clicking on a feature
  map.on('click', 'office_tourisme', (e) => {
    const url = e.features[0].properties.website;

    // Open the URL in a new tab
    window.open(url, '_blank');
  });

  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on('mouseenter', 'office_tourisme', () => {
    map.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to default when it leaves.
  map.on('mouseleave', 'office_tourisme', () => {
    map.getCanvas().style.cursor = '';
  });

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

// Legend Menu
let legendMenu = document.querySelector(".legend");
let legendButton = document.querySelector(".legend__button");

toggleLegendMenu = () => {
  legendMenu.classList.toggle("open");
}

legendButton.addEventListener("click", function () {
  toggleLegendMenu();
});

// Elevator script included on the page, already.
window.onload = function () {
  var elevator = new Elevator({
    element: document.querySelector('.ticket-button'),
    duration: 60000, // milliseconds
    //mainAudio: '/fig2024/audio/audio.mp3',
    endAudio: '/fig2024/sncf.mp3'
  });
}
