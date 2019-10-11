import axios, { AxiosResponse } from 'axios';


class RestApiService {
    constructor() {}

    async get(url: string) {
        return await axios.get(url);
    }

    async post(url: string, data: string): Promise<JSON> {
        return new Promise((resolve, reject) => {
            axios.post(url, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response: AxiosResponse) => {
                resolve(response.data);
            }).catch(() => {
                reject(JSON.stringify({
                    error: 'Something went wrong'
                }));
            });
        });
    }

    async delete(url: string, data: JSON) {
        const resp: AxiosResponse = await axios.post(url, data);

        return resp.data.JSON;
    }
}

export default new RestApiService();
