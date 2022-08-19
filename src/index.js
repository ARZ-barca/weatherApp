import { searchByCity } from "./search";
import changeCurrentTemp, { CtoF, CtoK, getCurrentTempMode } from "./temp";

const currentWeatherDom = document.querySelector(".current-weather");

const form = document.querySelector(".search-form");
const input = document.querySelector(".search-form input");
const error = document.querySelector(".search-form .error");
const searchIcon = document.querySelector(".search-icon");

const loadUrl = "images/Spin-0.8s-207px.svg";
const searchUrl = "images/search-svgrepo-com.svg";

const weatherIcon = document.querySelector(
  ".current-weather .weather-icon img"
);

const cMode = document.querySelector(".current-weather .c-mode");
const fMode = document.querySelector(".current-weather .f-mode");
const kMode = document.querySelector(".current-weather .k-mode");
const cover = document.querySelector(".current-weather .cover");

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
        weatherIcon.src = `http://openweathermap.org/img/wn/${result[0].weather[0].icon}@2x.png`;
        populateCurrentWeather(result[0]);
        currentWeatherDom.classList.add("show");
      }
    });
  } else {
    setError("city name is required.");
  }
  setTimeout(() => {
    searchIcon.src = searchUrl;
  }, 500);
});

// responsible for filling the current weather card
function populateCurrentWeather(result) {
  let country = result.sys.country;
  let city = result.name;
  let date = new Date(result.dt * 1000);
  let weatherDescription = result.weather[0].description;
  let temp;
  let feelsLike;
  if (getCurrentTempMode() === "C") {
    temp = result.main.temp;
    feelsLike = result.main.feels_like;
  } else if (getCurrentTempMode() === "F") {
    temp = CtoF(result.main.temp);
    feelsLike = CtoF(result.main.feels_like);
  } else if (getCurrentTempMode() === "K") {
    temp = CtoK(result.main.temp);
    feelsLike = CtoK(result.main.feels_like);
  }

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

  tempDom.innerHTML = `Temperature: <span class="temp-number">${temp}</span>°<span class="temp-symbol">${getCurrentTempMode()}</span>`;
  feelsDom.innerHTML = `Feels like: <span class="feels-number">${feelsLike}</span>°<span class="feels-symbol">${getCurrentTempMode()}</span>`;

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

// for changing the weather mode

cMode.addEventListener("click", function () {
  if (getCurrentTempMode() !== "C") {
    changeCurrentTemp("C");
    cover.classList.remove("on-f");
    cover.classList.remove("on-k");
    cover.classList.add("on-c");
  }
});

fMode.addEventListener("click", function () {
  if (getCurrentTempMode() !== "F") {
    changeCurrentTemp("F");
    cover.classList.remove("on-c");
    cover.classList.remove("on-k");
    cover.classList.add("on-f");
  }
});

kMode.addEventListener("click", function () {
  if (getCurrentTempMode() !== "K") {
    changeCurrentTemp("K");
    cover.classList.remove("on-f");
    cover.classList.remove("on-c");
    cover.classList.add("on-k");
  }
});

cover.addEventListener("transitionend", function () {
  this.textContent = getCurrentTempMode();
});
