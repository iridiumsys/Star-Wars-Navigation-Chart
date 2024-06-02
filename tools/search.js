// Fonction de recherche
function searchFeatureByName(name) {
    const features = vectorSource.getFeatures();
    for (let i = 0; i < features.length; i++) {
        const feature = features[i];
        const featureName = feature.get('NAME');
        if (featureName && featureName.toLowerCase() === name.toLowerCase()) {
            const geometry = feature.getGeometry();
            const extent = geometry.getExtent();
            map.getView().fit(extent, { duration: 1000 });
            return;
        }
    }
    alert('Nom non trouvé');
}

// Ajouter un écouteur d'événement au bouton de recherche
document.getElementById('search-button').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input').value;
    searchFeatureByName(searchInput);
});
