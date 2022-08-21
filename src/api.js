const api_key = "679208c8a3e8f64983666e8a1c6faf63";

// gets location data of a given city
async function getGeoCode(city) {
  let geoResponse = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${api_key}`,
    { mode: "cors" }
  );
  let geoData = await geoResponse.json();
  return geoData;
}

// gets weather data with lat and lon of geoData returned by getGeoCode(city)
async function getWeatherData(lat, lon) {
  let currentData = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`,
    { mode: "cors" }
  ).then((response) => {
    return response.json();
  });
  let fiveDayData = fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`,
    { mode: "cors" }
  ).then((response) => {
    return response.json();
  });

  let weatherData = await Promise.all([currentData, fiveDayData]);
  return weatherData;
}

export { getGeoCode, getWeatherData };
