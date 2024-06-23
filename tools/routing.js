// Pathfinding and Routing Logic

function setupRouting(map, routeLayer, systemsLayer) {
    let startPoint, endPoint;
    let routingActive = false;

    document.getElementById('toggle-routing').addEventListener('click', function() {
        routingActive = !routingActive;
        this.style.backgroundColor = routingActive ? '#79aaca' : 'rgba(0, 0, 0, 0.8)';
        if (routingActive) {
            map.once('click', event => {
                startPoint = event.coordinate;
                console.log('Start node:', startPoint);

                map.once('click', event => {
                    endPoint = event.coordinate;
                    console.log('End node:', endPoint);
                    calculateAndDisplayRoute(startPoint, endPoint, map, routeLayer);
                });
            });
        }
    });
}

function calculateAndDisplayRoute(startPoint, endPoint, map, routeLayer) {
    if (!startPoint || !endPoint) {
        alert('Please select both start and end points.');
        return;
    }

    const startProj = ol.proj.toLonLat(startPoint);
    const endProj = ol.proj.toLonLat(endPoint);

    const graph = new graphlib.Graph();

    routeLayer.getSource().forEachFeature(feature => {
        const geometry = feature.getGeometry();
        const coordinates = geometry.getCoordinates();

        for (let i = 0; i < coordinates.length - 1; i++) {
            const start = ol.proj.toLonLat(coordinates[i]);
            const end = ol.proj.toLonLat(coordinates[i + 1]);
            const distance = ol.sphere.getDistance(start, end);

            graph.setEdge(JSON.stringify(start), JSON.stringify(end), distance);
            graph.setEdge(JSON.stringify(end), JSON.stringify(start), distance);
        }
    });

    const dijkstra = graphlib.alg.dijkstra(graph, JSON.stringify(startProj));
    const path = [];

    let currNode = JSON.stringify(endProj);
    while (currNode !== JSON.stringify(startProj)) {
        path.push(JSON.parse(currNode));
        if (dijkstra[currNode] && dijkstra[currNode].predecessor) {
            currNode = dijkstra[currNode].predecessor;
        } else {
            alert('No route found between the selected points.');
            return;
        }
    }
    path.push(startProj);
    path.reverse();

    const routeFeature = new ol.Feature({
        geometry: new ol.geom.LineString(path.map(ol.proj.fromLonLat)),
    });

    const routeFeatureOverlay = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [routeFeature]
        }),
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'blue',
                width: 2,
            }),
        }),
    });

    map.addLayer(routeFeatureOverlay);
}

// Export the setup function
window.setupRouting = setupRouting;
