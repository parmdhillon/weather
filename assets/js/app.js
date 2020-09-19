import { weather } from './weather.js';

const getCity = document.getElementById('getCity');
const weatherData = new weather();

getCity.addEventListener('submit', (e) => {
  e.preventDefault();

  //City Name Value
  const cityName = getCity.cityName.value;
  getCity.reset();

  //Getting Weather Data and Updating UI
  weatherData.getWeather(cityName).then((data) => {
    console.log(data);
  });
});
