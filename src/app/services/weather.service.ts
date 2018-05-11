import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const appId = 'b5e73dff156f87af3f20ba84c86704d0';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) { }

  getWeatherByCityName(cityName: string) {
    const ep = `https://api.openweathermap.org/data/2.5/weather?q=${ cityName }&appid=${ appId }`;
    return this.http.get(ep);
  }

  getLastCityName() {
    return localStorage.getItem('lastCityName');
  }

  setLastCityName(cityName: string) {
    localStorage.setItem('lastCityName', cityName);
  }
}
