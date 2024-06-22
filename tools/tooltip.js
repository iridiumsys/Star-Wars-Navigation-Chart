map.on('click', 'systems-layer', function(event) {
    var feature = event.features[0];
    var coordinates = feature.geometry.coordinates.slice();
    var properties = feature.properties;

    var popupContent = `<div class="popup">
                            <div class="popup-info">
                                <h3>${properties.NAME}</h3>
                                ${properties.picture ? `<img src="${properties.picture}" alt="System Image" class="popup-image">` : ''}
                            </div>
                        </div>`;

    var popup = new mapboxgl.Popup({
        closeButton: true,
        closeOnClick: false,
        anchor: 'bottom',
        offset: 25,
        maxWidth: 'none'
    })
    .setLngLat(coordinates)
    .setHTML(popupContent)
    .addTo(map);

    // Close popup when clicking anywhere else on the map
    map.once('click', function() {
        popup.remove();
    });

    // Show tooltip near the cursor
    showTooltip(event, properties.NAME);
});
