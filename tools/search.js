// Store the original minimum zoom level
const originalMinZoom = map.getView().getMinZoom();

// Fonction de recherche
function searchFeatureByName(name) {
    const features = Systems_json_source.getFeatures();
    for (let i = 0; i < features.length; i++) {
        const feature = features[i];
        const featureName = feature.get('NAME'); // Assurez-vous que le champ du nom dans le GeoJSON est "name"
        if (featureName && featureName.toLowerCase() === name.toLowerCase()) {
            const geometry = feature.getGeometry();
            const extent = geometry.getExtent();
            map.getView().fit(extent, { duration: 1000 });
            // Set a minimum zoom level after zooming
            map.getView().setMinZoom(20); // Example: Setting minimum zoom level to 10
            return;
        }
    }
    alert('Object not found');
}

// Ajouter un écouteur d'événement au bouton de recherche
document.getElementById('search-button').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input').value;
    searchFeatureByName(searchInput);
    // Reset the minimum zoom level after each search
    map.getView().setMinZoom(originalMinZoom);
});
