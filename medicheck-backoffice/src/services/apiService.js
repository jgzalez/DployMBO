import axios from 'axios';
import { API_BASE_URL, LOGIN_ENDPOINT } from '../constants/apiEndpoints';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const login = async(credentials) => {
    try {
        const payload = {
            noDocumento: credentials.noDocumento,
            tipoDocumento: credentials.tipoDocumento,
            clave: credentials.clave,
        };

        const response = await axiosInstance.post(LOGIN_ENDPOINT, payload);
        return response.data; // Contains accessToken and other response data
    } catch (error) {
        // Handle or throw error as needed
        throw error;
    }
};