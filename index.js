//AIzaSyBt-nluPQzbxMIRG2iWD1c1dL4Z6nvRXqo

let google_map;
function initMap() {zv
    console.log("Maps JavaScript API loaded.");
    google_map = new google.maps.Map(document.getElementById("google_map"))
  }
  
  window.initMap = initMap;


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
  }