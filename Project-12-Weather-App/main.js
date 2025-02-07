document.getElementById("search-button").addEventListener("click", () => {
  const country = document.getElementById("country").value;
  getWeatherData(country);
});

async function getWeatherData(country) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${country}?unitGroup=us&key=YJ6BJNZWHKG28555TTN69XTDU&contentType=json`
    );
    const weather = await response.json();
    displayWeather(weather);
  } catch (error) {
    showError(error);
  }
}

async function displayWeather(weather) {
  const resultContainer = document.getElementById("result");
  const { address, currentConditions } = weather;
  resultContainer.textContent = `The weather condition in ${address} is ${currentConditions.conditions}`;
}

function showError(error) {
  const resultContainer = document.getElementById("result");
  resultContainer.textContent = error;
}
