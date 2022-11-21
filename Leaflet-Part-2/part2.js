function loadTectonicPlatesData(earthquakeData) {
    // Store our API endpoint as queryUrl.
let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

// Perform a GET request to the query URL/
d3.json("./Leaflet-Part-2/tectonicplates.json").then(function (data) {
    //$.getJSON("https://github.com/fraxen/tectonicplates/blob/master/GeoJSON/PB2002_plates.json").then(function (data) {
        console.log(data);
      createFeatures(earthquakeData, data);
    });
}