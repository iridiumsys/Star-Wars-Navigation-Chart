document.getElementById('search-button').addEventListener('click', function() {
    performSearch();
});

document.getElementById('search-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

// Add event listener to show suggestions as the user types
document.getElementById('search-input').addEventListener('input', function() {
    showSuggestions(this.value);
});

let systemsData = [];
fetch('./layers/systems.geojson')
    .then(response => response.json())
    .then(data => {
        systemsData = data.features;
        allFeatures = systemsData; // Assign to the existing allFeatures variable
    })
    .catch(error => console.error('Error loading systems data:', error));

function showSuggestions(value) {
    const suggestionsContainer = document.getElementById('suggestions-container');
    suggestionsContainer.innerHTML = '';

    if (!value) {
        suggestionsContainer.style.display = 'none';
        return;
    }

    const searchValue = value.toLowerCase();
    const suggestions = systemsData
        .filter(system => 
            system.properties.NAME.toLowerCase().includes(searchValue) ||
            (system.properties.ALT_NAME && system.properties.ALT_NAME.toLowerCase().includes(searchValue))
        )
        .slice(0, 10); // Limit the number of suggestions

    if (suggestions.length > 0) {
        suggestions.forEach(system => {
            const suggestionElement = document.createElement('div');
            suggestionElement.className = 'suggestion';
            suggestionElement.innerText = `${system.properties.NAME} (${system.properties.Type2})`;
            suggestionElement.addEventListener('click', function() {
                document.getElementById('search-input').value = system.properties.NAME;
                performSearch(system);
                suggestionsContainer.style.display = 'none';
            });
            suggestionsContainer.appendChild(suggestionElement);
        });
        suggestionsContainer.style.display = 'block';
    } else {
        suggestionsContainer.style.display = 'none';
    }
}

function performSearch(system = null) {
    if (system) {
        const coordinates = system.geometry.coordinates;
        map.flyTo({ center: coordinates, zoom: 20 });
        return;
    }

    const searchInput = document.getElementById('search-input').value.trim();
    if (!searchInput) {
        alert('Please enter a system name');
        return;
    }

    const searchWords = searchInput.toLowerCase().split(' ');

    let foundFeature = null;
    let maxMatchCount = 0; // Track maximum number of matching words

    for (const feature of allFeatures) {
        const featureName = feature.properties.NAME || '';
        const altName = feature.properties.ALT_NAME || '';
        const nameWords = featureName.toLowerCase().split(' ');
        const altNameWords = altName.toLowerCase().split(' ');

        let matchCount = 0;

        // Exact match check
        if (nameWords.some(word => searchWords.includes(word)) || 
            altNameWords.some(word => searchWords.includes(word))) {
            foundFeature = feature;
            maxMatchCount = searchWords.length; // Prefer full match
            break;
        }

        // Count matching words
        nameWords.forEach(word => {
            if (searchWords.includes(word)) {
                matchCount++;
            }
        });

        altNameWords.forEach(word => {
            if (searchWords.includes(word)) {
                matchCount++;
            }
        });

        // Prefer higher match count
        if (matchCount > maxMatchCount) {
            maxMatchCount = matchCount;
            foundFeature = feature;
        }
    }

    if (foundFeature && maxMatchCount > 0) { // Ensure at least one word matched
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
