let protocol = new pmtiles.Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);

let map = new maplibregl.Map({
  container: "map",
  center: [7.73394, 48.5853],
  // hash: true,
  pitchWithRotate: true,
  style: "teritorio_tourism.json",
  antialias: true,
  zoom: 17,
  bearing: 27,
  pitch: 45
});

map.on("load", function () {
  map.addControl(new maplibregl.NavigationControl());
  map.addControl(new maplibregl.ScaleControl({ unit: "metric" }));
});

// parameters to ensure the model is georeferenced correctly on the map
const modelOrigin = [7.733, 48.5842];
const modelAltitude = 0;
const modelRotate = [Math.PI / 2, -0.05, 0];

const modelAsMercatorCoordinate = maplibregl.MercatorCoordinate.fromLngLat(
  modelOrigin,
  modelAltitude
);

// transformation parameters to position, rotate and scale the 3D model onto the map
const modelTransform = {
  translateX: modelAsMercatorCoordinate.x,
  translateY: modelAsMercatorCoordinate.y,
  translateZ: modelAsMercatorCoordinate.z,
  rotateX: modelRotate[0],
  rotateY: modelRotate[1],
  rotateZ: modelRotate[2],
  /* Since our 3D model is in real world meters, a scale transform needs to be
   * applied since the CustomLayerInterface expects units in MercatorCoordinates.
   */
  scale: modelAsMercatorCoordinate.meterInMercatorCoordinateUnits(),
};

const THREE = window.THREE;

// configuration of the custom layer for a 3D model per the CustomLayerInterface
const customLayer = {
  id: "3d-model",
  type: "custom",
  renderingMode: "3d",
  onAdd(map, gl) {
    this.camera = new THREE.Camera();
    this.scene = new THREE.Scene();

    // create two three.js lights to illuminate the model
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(100, 100, 100).normalize();
    this.scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff);
    directionalLight2.position.set(0, 70, 100).normalize();
    this.scene.add(directionalLight2);

    // use the three.js GLTF loader to add the 3D model to the three.js scene
    const loader = new THREE.GLTFLoader();
    loader.load("assets/gare_strasbourg.gltf", (gltf) => {
      this.scene.add(gltf.scene);
    });
    this.map = map;

    // use the MapLibre GL JS map canvas for three.js
    this.renderer = new THREE.WebGLRenderer({
      canvas: map.getCanvas(),
      context: gl,
      antialias: true,
    });

    this.renderer.autoClear = false;
  },
  render(gl, matrix) {
    const rotationX = new THREE.Matrix4().makeRotationAxis(
      new THREE.Vector3(1, 0, 0),
      modelTransform.rotateX
    );
    const rotationY = new THREE.Matrix4().makeRotationAxis(
      new THREE.Vector3(0, 1, 0),
      modelTransform.rotateY
    );
    const rotationZ = new THREE.Matrix4().makeRotationAxis(
      new THREE.Vector3(0, 0, 1),
      modelTransform.rotateZ
    );

    const m = new THREE.Matrix4().fromArray(matrix);
    const l = new THREE.Matrix4()
      .makeTranslation(
        modelTransform.translateX,
        modelTransform.translateY,
        modelTransform.translateZ
      )
      .scale(
        new THREE.Vector3(
          modelTransform.scale,
          -modelTransform.scale,
          modelTransform.scale
        )
      )
      .multiply(rotationX)
      .multiply(rotationY)
      .multiply(rotationZ);

    this.camera.projectionMatrix = m.multiply(l);
    this.renderer.resetState();
    this.renderer.render(this.scene, this.camera);
    this.map.triggerRepaint();
  },
};

map.on("style.load", () => {
  map.addLayer(customLayer);
});

// -- rotation 360 depart
let animation;

function rotateCamera(timestamp) {
  // clamp the rotation between 0 -360 degrees
  // Divide timestamp by 100 to slow rotation to ~10 degrees / sec
  map.rotateTo((timestamp / 100) % 360, { duration: 0 });
  // Request the next frame of the animation.
  animation = requestAnimationFrame(rotateCamera);
}


// Start the animation.
rotateCamera(0);
// --

// -- scroll chapitres
gsap.registerPlugin(ScrollTrigger);

const chapters = {};

function createSectionsFromGeoJSON(geojson) {
  const featuresContainer = document.getElementById('features');
  geojson.features.forEach((feature, index) => {
    const element = document.createElement('div');
    element.classList.add('element');
    const section = document.createElement('section');
    section.id = feature.properties.id_etape;
    section.classList.add("_" + feature.properties.id_etape);

    const title = document.createElement('h3');
    title.textContent = feature.properties.titre_etape;

    const description = document.createElement('p');
    description.textContent = feature.properties.description || 'No description available.';

    element.appendChild(section);
    section.appendChild(title);
    section.appendChild(description);
    featuresContainer.appendChild(element);

    if (index != 0) {
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage = `url(` + feature.properties.image + `)`;
      el.style.width = `60px`;
      el.style.height = `60px`;
      el.style.visibility = `visible`;
      const marker = new maplibregl.Marker({ element: el })
        .setLngLat(feature.geometry.coordinates)
        .addTo(map);
    }

    ScrollTrigger.create({
      markers: true,
      trigger: '._' + feature.properties.id_etape,
      start: 'top 50%',
      endTrigger: '._' + feature.properties.id_etape,
      end: 'bottom 60%',
      onToggle: (self) => flyToChapter(feature.properties.id_etape)
    });

    chapters[feature.properties.id_etape] = {
      center: feature.geometry.coordinates,
      zoom: feature.properties.zoom,
      pitch: feature.properties.inclinaison,
      bearing: feature.properties.orientation
    };
  });
}

async function fetchGeoJSON() {
  try {
    const response = await fetch('recit.geojson');
    const geojson = await response.json();
    createSectionsFromGeoJSON(geojson);
  } catch (error) {
    console.error('Error fetching the GeoJSON file:', error);
  }
}

fetchGeoJSON();

// une fois les sections creees, on ajuste la position des triggers
ScrollTrigger.refresh(true);

function flyToChapter(chapterName) {
  if (chapterName != '0') {
    // desactivation rotation 360 depart
    cancelAnimationFrame(animation);
  }
  map.flyTo(chapters[chapterName]);
}
