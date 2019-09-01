// API keys
const GOOGLE_MAP_API = "AIzaSyBbwFABqkDY2roCmOWDeueDMfa0_VyhzNo";

export function getLocationAdress(lat, lon) {
  fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng='  + lat + ',' + lon + '&key=' + GOOGLE_MAP_API)
    .then((response) => response.json())
    .then((responseJson) => {
      // conso.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson));
      alert('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson));
    })
}
