// geojsonHandler.js

const chapters = {};

function createSectionsFromGeoJSON(geojson) {
  const featuresContainer = document.getElementById('features');
  geojson.features.forEach((feature, index) => {
    const section = document.createElement('section');
    section.id = feature.properties.id_etape;
    if (index === 0) {
      section.classList.add('active');
    }

    const title = document.createElement('h3');
    title.textContent = feature.properties.titre_etape;

    const description = document.createElement('p');
    description.textContent = feature.properties.description || 'No description available.';

    section.appendChild(title);
    section.appendChild(description);
    featuresContainer.appendChild(section);

    chapters[feature.properties.id_etape] = {
      center: feature.geometry.coordinates,
      zoom: feature.properties.zoom,
      pitch: feature.properties.inclinaison,
      bearing: feature.properties.orientation
    };
  });
}

async function fetchGeoJSON(map) {
  try {
    const response = await fetch('recit.geojson');
    const geojson = await response.json();
    createSectionsFromGeoJSON(geojson);

    // Set up scroll event listener
    window.onscroll = function () {
      const chapterNames = Object.keys(chapters);
      for (let i = 0; i < chapterNames.length; i++) {
        const chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
          setActiveChapter(chapterName);
          break;
        }
      }
    };

    let activeChapterName = geojson.features[0].properties.id_etape;
    function setActiveChapter(chapterName) {
      if (chapterName === activeChapterName) return;

      map.flyTo(chapters[chapterName]);

      document.getElementById(chapterName).classList.add('active');
      document.getElementById(activeChapterName).classList.remove('active');

      activeChapterName = chapterName;
    }

    function isElementOnScreen(id) {
      const element = document.getElementById(id);
      const bounds = element.getBoundingClientRect();
      return bounds.top < window.innerHeight && bounds.bottom > 0;
    }
  } catch (error) {
    console.error('Error fetching the GeoJSON file:', error);
  }
}

export { fetchGeoJSON };