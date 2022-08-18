import { searchByCity } from "./search";

const form = document.querySelector(".search-form");
const input = document.querySelector(".search-form input");
const error = document.querySelector(".search-form .error");
const searchIcon = document.querySelector(".search-icon");

const loadUrl = "images/Spin-0.8s-207px.svg";
const searchUrl = "images/search-svgrepo-com.svg";

const weatherGif = document.querySelector(".current-weather .weather-icon img");

// shows an error message in case of invalid city name or a network error
function setError(errorMessage) {
  input.classList.add("invalid");
  error.textContent = errorMessage;
}

// removes an error message in case of a succesful search
function clearError() {
  input.classList.remove("invalid");
  error.textContent = "";
}

// handles different search results and if all good returns an array with
// current weather as first element and 5days forcast as second
form.addEventListener("submit", function (e) {
  e.preventDefault();
  searchIcon.src = loadUrl;
  if (input.checkValidity()) {
    clearError();
    searchByCity(input.value).then((result) => {
      if (result === "invalid") {
        setError("invalid city.");
      } else if (result === null) {
        setError("nework error.");
      } else {
        console.log(result);
        weatherGif.src = `http://openweathermap.org/img/wn/${result[0].weather[0].icon}@2x.png`;
        populateCurrentWeather(result[0]);
      }
    });
  } else {
    setError("city name is required.");
  }
  setTimeout(() => {
    searchIcon.src = searchUrl;
  }, 300);
});

function populateCurrentWeather(result) {
  let country = result.sys.country;
  let city = result.name;
  let date = new Date(result.dt * 1000);
  let weatherDescription = result.weather[0].description;
  let temp = result.main.temp;
  let feelsLike = result.main.feels_like;
  let wind = result.wind.speed;
  let humidity = result.main.humidity;
  let sunrise = new Date(result.sys.sunrise * 1000);
  let sunset = new Date(result.sys.sunset * 1000);

  let placeDom = document.querySelector(".current-weather .place");
  let dateDom = document.querySelector(".current-weather .date");
  let timeDom = document.querySelector(".current-weather .time");
  let weatherDescriptionDom = document.querySelector(
    ".current-weather .weather-description"
  );
  let tempDom = document.querySelector(".current-weather .temp");
  let feelsDom = document.querySelector(".current-weather .feels");
  let windDom = document.querySelector(".current-weather .wind");
  let humidityDom = document.querySelector(".current-weather .humidity");
  let sunriseDom = document.querySelector(".current-weather .sunrise");
  let sunsetDom = document.querySelector(".current-weather .sunset");

  placeDom.textContent = `${country}-${city}`;

  dateDom.textContent = `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}`;

  timeDom.textContent = `${twoDigits(date.getHours())}:${twoDigits(
    date.getMinutes()
  )}:${twoDigits(date.getSeconds())}`;

  weatherDescriptionDom.textContent = `Weather: ${weatherDescription}`;

  tempDom.textContent = `Temperature: ${temp}°C`;
  feelsDom.textContent = `Feels like: ${feelsLike}°C`;
  windDom.textContent = `Wind speed: ${wind}m/s`;
  humidityDom.textContent = `Humidity: ${humidity}%`;

  sunriseDom.textContent = `Sunrise: ${twoDigits(
    sunrise.getHours()
  )}:${twoDigits(sunrise.getMinutes())}:${twoDigits(sunrise.getSeconds())}`;

  sunsetDom.textContent = `Sunset: ${twoDigits(sunset.getHours())}:${twoDigits(
    sunset.getMinutes()
  )}:${twoDigits(sunset.getSeconds())}`;
}

function twoDigits(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}
