export interface WeatherResult {
    location?: string;
    date: Date;
    temperatureC: number; // in Celsius
    temperatureF: number; // in Fahrenheit
    summary: string;
}