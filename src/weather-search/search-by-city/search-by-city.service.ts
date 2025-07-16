import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherSearchService {
    
  private apiUrl = 'https://localhost:xxxx';

  constructor(private http: HttpClient) {}

  searchWeatherByCity(cityName: string): Observable<any> {
    const payload = { city: cityName };
    return this.http.post<any>(this.apiUrl, payload);
  }
}