/*
  functions for coverting different modes of tempreture
*/

// to track the current mode
let currentTempMode = "C";

function setCurrentTempMode(newMode) {
  currentTempMode = newMode;
}

function getCurrentTempMode() {
  return currentTempMode;
}

// changes the symbol and number of temp and feels
function changeCurrentTemp(newSymbol) {
  let currentTempNumber = document.querySelector(
    ".current-weather .temp-number"
  );
  let currentFeelsNumber = document.querySelector(
    ".current-weather .feels-number"
  );
  let currentTempSymbol = document.querySelector(
    ".current-weather .temp-symbol"
  );
  let currentFeelsSymbol = document.querySelector(
    ".current-weather .feels-symbol"
  );
  currentTempSymbol.textContent = currentFeelsSymbol.textContent = newSymbol;
  if (currentTempMode === "C") {
    if (newSymbol === "F") {
      currentTempMode = "F";
      currentTempNumber.textContent = CtoF(currentTempNumber.textContent);
      currentFeelsNumber.textContent = CtoF(currentFeelsNumber.textContent);
    } else if (newSymbol === "K") {
      currentTempMode = "K";
      currentTempNumber.textContent = CtoK(currentTempNumber.textContent);
      currentFeelsNumber.textContent = CtoK(currentFeelsNumber.textContent);
    }
  } else if (currentTempMode === "F") {
    if (newSymbol === "C") {
      currentTempMode = "C";
      currentTempNumber.textContent = FtoC(currentTempNumber.textContent);
      currentFeelsNumber.textContent = FtoC(currentFeelsNumber.textContent);
    } else if (newSymbol === "K") {
      currentTempMode = "K";
      currentTempNumber.textContent = FtoK(currentTempNumber.textContent);
      currentFeelsNumber.textContent = FtoK(currentFeelsNumber.textContent);
    }
  } else if (currentTempMode === "K") {
    if (newSymbol === "C") {
      currentTempMode = "C";
      currentTempNumber.textContent = KtoC(currentTempNumber.textContent);
      currentFeelsNumber.textContent = KtoC(currentFeelsNumber.textContent);
    } else if (newSymbol === "F") {
      currentTempMode = "F";
      currentTempNumber.textContent = KtoF(currentTempNumber.textContent);
      currentFeelsNumber.textContent = KtoF(currentFeelsNumber.textContent);
    }
  }
}

// function for coverting the numbers with proper math

function CtoF(celsius) {
  let fahrenheit = (Number(celsius) * 9) / 5 + 32;
  return roundTo2Decimals(fahrenheit);
}
function CtoK(celsius) {
  let kelvin = Number(celsius) + 273.15;
  return roundTo2Decimals(kelvin);
}
function FtoK(fahrenheit) {
  let kelvin = ((Number(fahrenheit) - 32) * 5) / 9 + 273.15;
  return roundTo2Decimals(kelvin);
}
function FtoC(fahrenheit) {
  let celsius = ((Number(fahrenheit) - 32) * 5) / 9;
  return roundTo2Decimals(celsius);
}
function KtoC(kelvin) {
  let celsius = Number(kelvin) - 273.15;
  return roundTo2Decimals(celsius);
}
function KtoF(kelvin) {
  let fahrenheit = ((Number(kelvin) - 273.15) * 9) / 5 + 32;
  return roundTo2Decimals(fahrenheit);
}

// for better presentation
function roundTo2Decimals(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

export {
  KtoC,
  KtoF,
  CtoF,
  CtoK,
  FtoC,
  FtoK,
  setCurrentTempMode,
  getCurrentTempMode,
};
export default changeCurrentTemp;
