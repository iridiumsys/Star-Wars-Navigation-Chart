import GeoJSON from 'ol/format/GeoJSON';
import { Vector as VectorSource } from 'ol/source';
import { SearchNominatim } from 'ol-ext/control/SearchNominatim';


// Charger les données GeoJSON
fetch('./layers/systems.geojson')
    .then(response => response.json())
    .then(json => {
        // Créer la source et la couche vectorielle
        const vectorSource = new VectorSource({
            features: new GeoJSON().readFeatures(json, {
                featureProjection: 'EPSG:3395'
            })
        });

//        const vectorLayer = new VectorLayer({
//            source: vectorSource
//        });

// Créer le contrôle de recherche
const searchControl = new SearchNominatim({
    source: vectorSource,
    property: ['NAME', 'ALT_NAME']
});

// Ajouter le contrôle de recherche à la carte
map.addControl(searchControl);
  });