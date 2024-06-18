// Routing functionality
const routeLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        url: './layers/routes.geojson',
        format: new ol.format.GeoJSON(),
    }),
    style: transparentStyle,
});

map.addLayer(routeLayer);

const routeFeatureOverlay = new ol.layer.Vector({
    source: new ol.source.Vector(),
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'blue',
            width: 2,
        }),
        text: new ol.style.Text({
            font: '12px Calibri,sans-serif',
            fill: new ol.style.Fill({ color: 'black' }),
            stroke: new ol.style.Stroke({
                color: 'white',
                width: 3,
            }),
        }),
    }),
});

map.addLayer(routeFeatureOverlay);

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
                calculateAndDisplayRoute();
            });
        });
    }
});

function calculateAndDisplayRoute() {
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

    console.log('Graph nodes:', graph.nodes());
    console.log('Graph edges:', graph.edges());

    const dijkstra = graphlib.alg.dijkstra(graph, JSON.stringify(startProj));

    if (!dijkstra[JSON.stringify(endProj)]) {
        alert('No route found between the selected points.');
        return;
    }

    const path = [];
    let currNode = JSON.stringify(endProj);
    while (currNode !== JSON.stringify(startProj)) {
        if (!dijkstra[currNode] || !dijkstra[currNode].predecessor) {
            alert('No route found between the selected points.');
            return;
        }
        path.push(JSON.parse(currNode));
        currNode = dijkstra[currNode].predecessor;
    }
    path.push(startProj);
    path.reverse();

    const routeFeature = new ol.Feature({
        geometry: new ol.geom.LineString(path.map(ol.proj.fromLonLat)),
    });

    routeFeatureOverlay.getSource().clear();
    routeFeatureOverlay.getSource().addFeature(routeFeature);
}
