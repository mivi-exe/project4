
  //Coordinate / Speed Change
  let long = document.getElementById("long");
  let lat = document.getElementById("lat");
  let speed = document.getElementById("speed");

  async function getLong() {
    const response_long = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
    const response_long_json = await response_long.json();
    console.log(response_long_json.longitude);
    return response_long_json.longitude;
  }
  
  async function getLat() {
    const response_lat = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
    const response_lat_json = await response_lat.json();
    console.log(response_lat_json.latitude);
    return response_lat_json.latitude;
  }
  
  async function getSpeed() {
    const response_speed = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
    const response_speed_json = await response_speed.json();
    console.log(response_speed_json.velocity);
    return response_speed_json.velocity;
  }
  

  async function changeInfo() {
    const returned_long = await getLong();
    const returned_lat = await getLat();
    const returned_speed = await getSpeed();

    console.log("After function");
    long.innerHTML = returned_long.toFixed(4);
    lat.innerHTML = returned_lat.toFixed(4);
    speed.innerHTML= returned_speed.toFixed(2);

    console.log(`Longitude has been changed to: ${long.innerHTML}`);
    console.log(`Latitude has been changed to: ${lat.innerHTML}`);
    console.log(`Speed has been changed to: ${speed.innerHTML}`);

    updateMap();
  }

var map_long = -80.651070;
var map_lat = 28.573469;

var map = L.map('map').setView([map_lat, map_long], 6);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([map_lat, map_long]).addTo(map);


async function updateMap() {
  var new_lat = await getLat();
  var new_long = await getLong();
  console.log("Map coordinates");
  console.log(new_long);
  console.log(new_lat);
  map.flyTo([new_lat, new_long], 6);
  marker.setLatLng([new_lat, new_long]).update();
}

document.addEventListener("DOMContentLoaded", function() {
  changeInfo();
  updateMap();
});

var height_stream = document.getElementById("stream_player");
var height_map = document.getElementById("map");
var temp_height = height_stream.offsetHeight;
height_map.style.height = temp_height;