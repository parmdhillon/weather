import { weather } from './weather.js';

const getCity = document.getElementById('getCity');
const setCity = document.getElementById('setCityName');
const dayTime = document.getElementById('dayTime');
const tempratureEl = document.getElementById('temprature');
const tempratureInfo = document.getElementById('tempratureInfo');
const weatherIcon = document.getElementById('weatherIcon');
const weatherData = new weather();

const updateUI = (data) => {
  setCity.textContent = data.name;
  dayTime.textContent = getDate(data.dt);
  tempratureEl.textContent = data.main.temp + '°';
  tempratureInfo.textContent = data.weather[0].main;
  weatherIcon.setAttribute('src', `assets/img/${data.weather[0].icon}.png`);
  console.log(data);
};

const getDate = (timestamp) => {
  var a = new Date(timestamp * 1000);
  var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return `${days[a.getDay()]}, ${a.getDate()} ${months[a.getMonth()]}`;
};

getCity.addEventListener('submit', (e) => {
  e.preventDefault();

  //City Name Value
  const cityName = getCity.cityName.value.trim();
  getCity.reset();

  //Getting Weather Data and Updating UI
  if (cityName != '') {
    localStorage.setItem('city', cityName);
    weatherData.getWeather(cityName).then((data) => {
      updateUI(data);
    });
  }
});

const localCityName = localStorage.getItem('city');
if (localCityName) {
  weatherData.getWeather(localCityName).then((data) => {
    updateUI(data);
  });
} else {
  weatherData.getWeather('Toronto').then((data) => {
    updateUI(data);
  });
}
