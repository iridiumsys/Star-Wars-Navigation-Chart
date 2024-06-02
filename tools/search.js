// Store the original minimum zoom level
const originalMinZoom = map.getView().getMinZoom();

// Fonction de recherche
function searchFeatureByName(name) {
    const features = Systems_json_source.getFeatures();
    for (let i = 0; i < features.length; i++) {
        const feature = features[i];
        const featureName = feature.get('NAME'); // Assurez-vous que le champ du nom dans le GeoJSON est "name"
        console.log('Feature Name:', featureName); // Log feature name
        if (featureName && featureName.toLowerCase() === name.toLowerCase()) {
            const geometry = feature.getGeometry();
            const extent = geometry.getExtent();
            console.log('Extent:', extent); // Log extent
            map.getView().fit(extent, { duration: 1000 });
            // Set a minimum zoom level after zooming
            map.getView().setMinZoom(20); // Example: Setting minimum zoom level to 20
            return;
        }
    }
    alert('Object not found');
}


// Function to handle search
//function handleSearch() {
//    const searchInput = document.getElementById('search-input').value;
//    searchFeatureByName(searchInput);
//    // Reset the minimum zoom level after each search
//    map.getView().setMinZoom(originalMinZoom);
//    // Clear the map's view for the next search
//    map.getView().setCenter([0.00847486, -0.0109944]); // Reset center to initial position
//    map.getView().setZoom(18); // Reset zoom level
//}

// Event listener for "Enter" key press on search input field
document.getElementById('search-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
});

// Event listener for search button click
document.getElementById('search-button').addEventListener('click', handleSearch);
