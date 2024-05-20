import GeoJSON from 'ol/format/GeoJSON';
import { Vector as VectorSource } from 'ol/source';
import { SearchNominatim } from 'ol-ext/control/SearchNominatim';


// Charger les donn�es GeoJSON
fetch('./layers/systems.geojson')
    .then(response => response.json())
    .then(json => {
        // Cr�er la source et la couche vectorielle
        const vectorSource = new VectorSource({
            features: new GeoJSON().readFeatures(json, {
                featureProjection: 'EPSG:3395'
            })
        });

//        const vectorLayer = new VectorLayer({
//            source: vectorSource
//        });

// Cr�er le contr�le de recherche
const searchControl = new SearchNominatim({
    source: vectorSource,
    property: ['NAME', 'ALT_NAME']
});

// Ajouter le contr�le de recherche � la carte
map.addControl(searchControl);
  });