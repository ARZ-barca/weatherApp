import { searchByCity } from "./search";

const form = document.querySelector(".search-form");
const input = document.querySelector(".search-form input");
const error = document.querySelector(".search-form .error");
const searchIcon = document.querySelector(".search-icon");

const loadUrl = "images/Spin-0.8s-207px.svg";
const searchUrl = "images/search-svgrepo-com.svg";

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

  let placeDom = document.querySelector(".current-weather .place");
  placeDom.textContent = `${country}-${city}`;

  let date = new Date(result.dt * 1000);
  let dateDom = document.querySelector(".current-weather .date");
  let timeDom = document.querySelector(".current-weather .time");

  // let weather = result.

  dateDom.textContent = `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}`;
  timeDom.textContent = `${twoDigits(date.getHours())}:${twoDigits(
    date.getMinutes()
  )}:${twoDigits(date.getSeconds())}`;
}

function twoDigits(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}
