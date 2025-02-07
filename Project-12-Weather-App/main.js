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

    const result = weather.days[0].conditions;

    showForecast(country, result);
  } catch (error) {
    showError(error);
  }
}

async function showForecast(country, result) {
  const resultContainer = document.getElementById("result");
  resultContainer.textContent = `The weather condition in ${country} is ${result}`;
}

function showError(error) {
  const resultContainer = document.getElementById("result");
  resultContainer.textContent = error;
}
