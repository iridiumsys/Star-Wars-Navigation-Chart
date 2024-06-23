document.getElementById('search-button').addEventListener('click', function() {
    performSearch();
});

document.getElementById('search-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const searchInput = document.getElementById('search-input').value.trim();
    if (!searchInput) {
        alert('Please enter a system name');
        return;
    }

    const searchWords = searchInput.toLowerCase().split(' ');

    let foundFeature = null;
    let minDistance = Infinity;

    for (const feature of allFeatures) {
        const featureName = feature.properties.NAME;
        if (!featureName) continue;
        const nameWords = featureName.toLowerCase().split(' ');

        const distances = searchWords.map(searchWord => 
            Math.min(...nameWords.map(nameWord => levenshteinDistance(searchWord, nameWord)))
        );

        const totalDistance = distances.reduce((a, b) => a + b, 0);

        if (totalDistance < minDistance) {
            minDistance = totalDistance;
            foundFeature = feature;
        }
    }

    if (foundFeature && minDistance < 3) { // Set a threshold for acceptable distance
        const coordinates = foundFeature.geometry.coordinates;
        map.flyTo({ center: coordinates, zoom: 20 });
    } else {
        alert('System not found');
        map.setZoom(18); // Reset zoom if not found
    }
}

function levenshteinDistance(a, b) {
    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) == a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // substitution
                    matrix[i][j - 1] + 1,     // insertion
                    matrix[i - 1][j] + 1      // deletion
                );
            }
        }
    }

    return matrix[b.length][a.length];
}
