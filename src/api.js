async function getGeoCode(city) {
  let geoResponse = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=679208c8a3e8f64983666e8a1c6faf63`
  );
  let geoData = await geoResponse.json();
  return geoData;
}

export { getGeoCode };
