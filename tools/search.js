// Fonction de recherche
function searchFeatureByName(name) {
    const features = Systems_json_source.getFeatures();
    for (let i = 0; i < features.length; i++) {
        const feature = features[i];
        const featureName = feature.get('NAME');
        if (featureName && featureName.toLowerCase() === name.toLowerCase()) {
            const geometry = feature.getGeometry();
            const extent = geometry.getExtent();
            map.getView().fit(extent, { duration: 1000 });
            map.getView().setMinZoom(19);
            return;
        }
    }
    alert('Name not found');
}

// Ajouter un écouteur d'événement au bouton de recherche
document.getElementById('search-button').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input').value;
    searchFeatureByName(searchInput);
});
