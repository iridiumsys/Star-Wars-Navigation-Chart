document.getElementById('search-button').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input').value.trim();
    if (!searchInput) {
        alert('Please enter a system name');
        return;
    }

    const searchWords = searchInput.toLowerCase().split(' ');

    let foundFeature = null;

    for (const feature of allFeatures) {
        const featureName = feature.properties.NAME;
        if (!featureName) continue;
        const nameWords = featureName.toLowerCase().split(' ');

        const allWordsMatch = searchWords.every(searchWord =>
            nameWords.some(nameWord => nameWord.includes(searchWord))
        );

        if (allWordsMatch) {
            foundFeature = feature;
            break;
        }
    }

    if (foundFeature) {
        const coordinates = foundFeature.geometry.coordinates;
        map.flyTo({ center: coordinates, zoom: 20 });
    } else {
        alert('System not found');
        map.setZoom(18); // Reset zoom if not found
    }
});
