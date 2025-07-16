import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherSearchService } from './search-by-city.service';

@Component({
  selector: 'app-search-by-city',
  imports: [FormsModule],
  templateUrl: './search-by-city.html',
  styleUrl: './search-by-city.css'
})
export class SearchByCity {
  cityName: string = '';

  constructor(private weatherSearchService: WeatherSearchService) {}

  onButtonClick() {
    if (!this.cityName) {
      console.error('City name is required');
      return;
    }    
    this.weatherSearchService.searchWeatherByCity(this.cityName).subscribe((result) => {
      console.log('Result:', result);
    });
  }
}
