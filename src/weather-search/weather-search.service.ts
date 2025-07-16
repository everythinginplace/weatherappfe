import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherResult } from './weather-result';

@Injectable({
  providedIn: 'root'
})
export class WeatherSearchService {
    
  private apiUrl = 'https://localhost:7224';

  constructor(private http: HttpClient) {}

  weatherSummary(): Observable<WeatherResult> {
    return this.http.get<any>(`${this.apiUrl}/WeatherSummary`);
  }

  weatherSummaryByCity(cityName: string): Observable<WeatherResult> {
    const payload = { city: cityName };
    return this.http.post<WeatherResult>(`${this.apiUrl}/WeatherSummary`, payload);
  }
}