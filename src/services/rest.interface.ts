import axios, { AxiosResponse } from 'axios';


class RestApiService {
    constructor() {}

    async get(url: string) {
        return await axios.get(url);
    }

    async post(url: string, data: string) {
        let respData: JSON;
        axios.post(url, data).then((response: AxiosResponse) => {
            respData = response.data.JSON;
        });

        return await respData;
    }

    async delete(url: string, data: JSON) {
        let resp: AxiosResponse = await axios.post(url, data)

        return resp.data.JSON;
    }
}

export default new RestApiService();