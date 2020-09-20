export class weather {
  constructor() {
    this.apiKey = '1a515356f7170f57437fdc7cb4aef06f';
    this.apiURI =
      'https://api.openweathermap.org/data/2.5/weather/?units=metric&';
  }

  async getWeather(city) {
    const apiQuery = `q=${city}&appid=${this.apiKey}`;
    const apiResponse = await fetch(this.apiURI + apiQuery);
    if (apiResponse.ok) {
      const weatherData = await apiResponse.json();
      return weatherData;
    }
    const notFound = {
      notfound: true,
    };
    return notFound;
  }
}
