function handleSearch() {
  const searchInput = document.getElementById('search-input').value;
  const vectorLayer = map.getLayers().getArray().find(layer => layer instanceof ol.layer.Vector && layer.getSource() === SystemsSource);
  if (!vectorLayer) {
    alert('No vector layer found');
    return;
  }
  const vectorSource = vectorLayer.getSource();
  const features = vectorSource.getFeatures();
  let foundFeature = null;
  for (let i = 0; i < features.length; i++) {
    const feature = features[i];
    const featureName = feature.get('NAME'); // Assurez-vous que le champ du nom dans le GeoJSON est "name"
    console.log('Feature Name:', featureName); // Log feature name
    if (featureName && featureName.toLowerCase() === searchInput.toLowerCase()) {
      foundFeature = feature;
      break;
    }
  }
  if (foundFeature) {
    const geometry = foundFeature.getGeometry();
    const extent = geometry.getExtent();
    console.log('Extent:', extent); // Log extent
    map.getView().fit(extent, { duration: 1000 });
    // Set a minimum zoom level after zooming
    map.getView().setMinZoom(20); // Example: Setting minimum zoom level to 20
  } else {
    alert('Object not found');
  }
}
