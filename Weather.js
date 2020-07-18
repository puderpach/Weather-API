const cities = [
  {
    "name": "Munich, DE",
    "coordinates": "lat=48.14&lon=11.58"
  },
  {
    "name": "Berlin, DE",
    "coordinates": "lat=52.52&lon=13.40"
  },
  {
    "name": "Lisbon, PT",
    "coordinates": "lat=38.74&lon=-9.14"
  },
  {
    "name": "Melbourne, AU",
    "coordinates": "lat=-37.81&lon=144,96"
  },
  {
    "name": "Wenns, AT",
    "coordinates": "lat=47.15&lon=10.72"
  },
  {
    "name": "Hochfügen, AT",
    "coordinates": "lat=47.27&lon=11.78"
  },
  {
    "name": "Stubai Glacier, AT",
    "coordinates": "lat=47.01&lon=11.16"
  },
  {
    "name": "Moliets-Plage, FR",
    "coordinates": "lat=48.85&lon=-1.39"
  },
  {
    "name": "Innsbruck, AT",
    "coordinates": "lat=47.26&lon=11.39"
  },
];

function weather(cityNum) {
  showOverlay();
  overlay.addEventListener("click", hideOverlay);
  showWeather(cities[cityNum]);
}

function showOverlay() {
  let overlay = document.getElementById("overlay");
  overlay.style.display = "flex";
}

function hideOverlay() {
  let overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}

function showWeather(c) {
  const key = '7ca57b08df27522b74c0859d570275c3';
  fetch('https://api.openweathermap.org/data/2.5/weather?' + c.coordinates + '&units=metric&appid=' + key)
    .then(function (response) { return response.json() })
    .then(function (data) {
      displayData(data, c);
    })
}

function displayData(data, c) {
  let cityName = document.getElementById("weather-title")
  let inputWeather = document.getElementById("input-weather")
  let inputTemp = document.getElementById("input-temperature")
  let inputMax = document.getElementById("input-maximum")
  let inputMin = document.getElementById("input-minimum")
  let inputWind = document.getElementById("input-wind")
  let inputHumid = document.getElementById("input-humid")
  cityName.innerHTML = c.name;
  inputWeather.innerHTML = data.weather[0].description;
  inputTemp.innerHTML = data.main.temp + " °C";
  inputMax.innerHTML = data.main.temp_max + " °C";
  inputMin.innerHTML = data.main.temp_min + " °C";
  inputWind.innerHTML = data.wind.speed + " m/s";
  inputHumid.innerHTML = data.main.humidity + " %";
  weatherBackground(data.weather[0].main);
}

function weatherBackground(b) {
  let weatherFields = document.getElementById("weather-field");
  switch (b) {
    case "Clouds": weatherFields.style.backgroundImage = 'url("Images/Clouds.jpg")';
    break;
    case "Thunderstorm": weatherFields.style.backgroundImage = 'url("Images/Thunder.jpg")';
    break;
    case "Drizzle": weatherFields.style.backgroundImage = 'url("Images/Rain.jpg")';
    break;
    case "Rain": weatherFields.style.backgroundImage = 'url("Images/Rain.jpg")';
    break;
    case "Snow": weatherFields.style.backgroundImage = 'url("Images/Snow.jpg")';
    break;
    case "Atmosphere": weatherFields.style.backgroundImage = 'url("Images/Fog.jpg")';
    break;
    case "Clear": weatherFields.style.backgroundImage = 'url("Images/Clear.jpeg")';
    break;
  }

}