import config from 'config';
import {handleResponse} from "@/helpers/handle-response";


export const restService = {
    getAllCovidData
};

async function getAllCovidData() {
    const requestOptions = {
        method: 'GET'
    };

    return await fetch(`${config.apiUrl}/covid/all`, requestOptions).then(handleResponse);
}