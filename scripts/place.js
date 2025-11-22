
function calculateWindChill() {

  return (35.74 + 0.6215*45 - 35.75*(8**0.16) + 0.4275*45*(8**0.16)).toFixed(1) + "°F";
}

let temp_in = 45
let wind_speed = 8

if (temp_in <= 50 && wind_speed > 3) {
  document.getElementById("wci").innerHTML = calculateWindChill();
} else {
  document.getElementById("wci").innerHTML = "N/A";
}  