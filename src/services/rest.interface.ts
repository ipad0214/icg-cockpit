import axios, { AxiosResponse } from 'axios';


class RestApiService {
    constructor() {}

    async get(url: string) {
        let data: JSON;
        axios.get(url).then((response: AxiosResponse) => {
            data = response.data.JSON
        });

        return await data;
    }

    async post(url: string, data: JSON) {
        let respData: JSON;
        axios.post(url, data).then((response: AxiosResponse) => {
            respData = response.data.JSON;
        });

        return await respData;
    }

    async delete(url: string, data: JSON) {
        let respData: JSON;
        axios.post(url, data).then((response: AxiosResponse) => {
            respData = response.data.JSON;
        });

        return await respData;
    }
}

export default new RestApiService();