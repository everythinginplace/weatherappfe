import { ChangeDetectorRef, Component,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherSearchService } from '../weather-search.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-by-city',
  imports: [FormsModule, CommonModule],
  templateUrl: './search-by-city.html',
  styleUrl: './search-by-city.css',
})
export class SearchByCity {
  cityName: string = 'Perth'; // Save me typing it

  weatherResult: any;

  constructor(
    private cdr: ChangeDetectorRef,
    private weatherSearchService: WeatherSearchService) {}

  onButtonClick() {
    // Check we have a city name - proper validation would be better
    if (!this.cityName) {
      console.error('City name is required');
      return;
    }

    this.weatherSearchService.weatherSummaryByCity(this.cityName).subscribe((result) => {
      console.log('Result:', result);
      this.weatherResult = result;
      this.cdr.detectChanges();
    });
  }
}
