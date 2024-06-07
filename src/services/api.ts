// src/services/api.ts
import axios from 'axios';

const API_URL = 'https://mocki.io/v1/f5e9c80a-5408-4d64-a965-0b60ad436f7a';

export const fetchActivityData = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};
