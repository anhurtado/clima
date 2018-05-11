import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
  public weatherData: any;
  public cityName: string;
  public errorMessage: string;

  constructor(private weatherService: WeatherService) {
    this.clearVars();
    this.cityName = '';
  }

  ngOnInit() {
    // Solicito el valor en el LocalStorage
    this.cityName = this.weatherService.getLastCityName();

    // Verifico si existe algun valor
    if (this.cityName) {
      // Consulto la ciudad establecida
      this.searchByCityName();
    }
  }

  searchByCityName() {
    // Limpio las variables
    this.clearVars();

    // Consulto la información
    this.weatherService.getWeatherByCityName(this.cityName).subscribe(
      res => {
        // Asigno la respuesta del servidor a mi arreglo local
        this.weatherData = res;

        // Establezco la ciudad en el LocalStorage
        this.weatherService.setLastCityName(this.cityName);
      },
      error => {
        if (error.status === 400) {
          this.errorMessage = 'Error al comunicarse con el servidor';
        } else if (error.status === 404) {
          this.errorMessage = 'Ciudad no encontrada';
        } else {
          this.errorMessage = 'Ocurrio un error inesperado';
        }
      }
    );
  }

  clearVars() {
    this.weatherData = [];
    this.errorMessage = '';
  }
}
