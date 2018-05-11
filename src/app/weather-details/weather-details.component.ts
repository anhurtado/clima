import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent {
  // Propiedad enviada por WeatherSearchComponent
  @Input() data: any;

  // Método para validar las propiedades
  hasProp(obj: any, prop: string) {
    // Variable local
    let valueElement = '';

    // Validando
    if (obj !== undefined && obj !== null) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        valueElement = obj[prop];
      } else {
        valueElement = 'S/D';
      }
    } else {
      valueElement = 'S/D';
    }

    // Devolviendo el valor
    return valueElement;
  }
}
