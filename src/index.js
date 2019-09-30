console.log('AM i running correctly?');

const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1Ijoibmphc2kiLCJhIjoiY2sxNmw3b3MwMHlmMDNjbGIweWljcXEzcyJ9.Tj5JyZqhw4ngd0-Vp9tSDA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v11" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);

const marker2 = buildMarker("restaurant", [-87.6354, 41.8885]); // or [-87.6354, 41.8885]
marker2.addTo(map);

module.exports = map
