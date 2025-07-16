import { Routes } from '@angular/router';
import { SearchByCity } from '../weather-search/search-by-city/search-by-city';
import { SearchByPostcode } from '../weather-search/search-by-postcode/search-by-postcode';

export const routes: Routes = [
    { path: '', redirectTo: 'searchbycity', pathMatch: 'full' },
    { path: 'searchbycity', component: SearchByCity },
    { path: 'searchbypostcode', component: SearchByPostcode }
];
