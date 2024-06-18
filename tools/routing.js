// Simple Dijkstra implementation
function dijkstra(graph, source) {
    const distances = {};
    const previous = {};
    const queue = [];

    for (let vertex in graph.nodes) {
        if (graph.nodes.hasOwnProperty(vertex)) {
            distances[vertex] = Infinity;
            previous[vertex] = null;
            queue.push(vertex);
        }
    }
    distances[source] = 0;

    while (queue.length > 0) {
        queue.sort((a, b) => distances[a] - distances[b]);
        const u = queue.shift();

        for (let neighbor in graph.edges[u]) {
            if (graph.edges[u].hasOwnProperty(neighbor)) {
                const alt = distances[u] + graph.edges[u][neighbor];
                if (alt < distances[neighbor]) {
                    distances[neighbor] = alt;
                    previous[neighbor] = u;
                }
            }
        }
    }

    return { distances, previous };
}

function getPath(previous, target) {
    const path = [];
    let currentNode = target;

    while (currentNode !== null) {
        path.unshift(currentNode);
        currentNode = previous[currentNode];
    }

    return path;
}

// Graph data structure
class Graph {
    constructor() {
        this.nodes = {};
        this.edges = {};
    }

    addNode(node) {
        this.nodes[node] = node;
        this.edges[node] = {};
    }

    addEdge(start, end, weight) {
        this.edges[start][end] = weight;
        this.edges[end][start] = weight; // Assuming undirected graph
    }
}

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

    const graph = new Graph();

    routeLayer.getSource().forEachFeature(feature => {
        const geometry = feature.getGeometry();
        const coordinates = geometry.getCoordinates();

        for (let i = 0; i < coordinates.length - 1; i++) {
            const start = ol.proj.toLonLat(coordinates[i]);
            const end = ol.proj.toLonLat(coordinates[i + 1]);
            const distance = ol.sphere.getDistance(start, end);

            graph.addNode(JSON.stringify(start));
            graph.addNode(JSON.stringify(end));
            graph.addEdge(JSON.stringify(start), JSON.stringify(end), distance);
        }
    });

    console.log('Graph nodes:', Object.keys(graph.nodes));
    console.log('Graph edges:', graph.edges);

    const { distances, previous } = dijkstra(graph, JSON.stringify(startProj));

    if (!distances[JSON.stringify(endProj)] || distances[JSON.stringify(endProj)] === Infinity) {
        alert('No route found between the selected points.');
        return;
    }

    const path = getPath(previous, JSON.stringify(endProj)).map(coord => JSON.parse(coord));
    path.push(startProj);
    path.reverse();

    const routeFeature = new ol.Feature({
        geometry: new ol.geom.LineString(path.map(ol.proj.fromLonLat)),
    });

    routeFeatureOverlay.getSource().clear();
    routeFeatureOverlay.getSource().addFeature(routeFeature);
}
