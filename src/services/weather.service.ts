import axios, { AxiosResponse } from 'axios';

class WeatherService {
    constructor() {}

    private url = `http://localhost:4200/weatherproxy/`;

    async getCurrentWeather() {
        console.log(this.url + 'weather');
        return await axios.get(this.url + 'weather');
    }

    async getForecastWeather() {
        return await axios.get(this.url + 'forecast');
    }
}

export default new WeatherService();
