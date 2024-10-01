import axios from 'axios';

import { API_ENDPOINTS, API_URL } from 'constants/data';


export const getClothesData = async (gender) => {
    try {
        const apiUrl = `${API_URL}${API_ENDPOINTS.getData}`;

        // const test = await axios.get('https://wearify-api-432112.wl.r.appspot.com/genai_id?isFemale=false&skin=029&age=25')
        // console.log(test, 'test')
        
        const response = await axios.get(apiUrl, {
            params: {
                type: 2,
                gender,
                start: 0,
                end: 100
            },
            timeout: 10000
        });

        console.log(response)

        return {
            data: JSON.parse(response.data)
        };
    } catch (error) {
        if (error.response) {
            return {
                message: error.message,
                statusCode: error.response.status
            };
        } else if (error.request) {
            console.error('No response received from API:', error.message);
            return error.message;
        } else {
            console.error('Error setting up the request:', error.message);
            return error.message;
        }
    }
};