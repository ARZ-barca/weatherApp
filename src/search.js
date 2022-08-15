import { getGeoCode, getWeatherData } from "./api";

// gets weather data of a given city using defined api function
let locData;
async function searchByCity(city) {
  try {
    locData = await getGeoCode(city);
    let lat = locData[0].lat;
    let lon = locData[0].lon;
    let weatherData = await getWeatherData(lat, lon);
    return weatherData;
  } catch (e) {
    if (locData === undefined) {
      return null;
    }
    if (locData.length === 0) {
      return "invalid";
    }
  }
}

export { searchByCity };
