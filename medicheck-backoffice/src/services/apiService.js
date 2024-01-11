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
        const token = response.data.accessToken; // Asegúrate de que esto coincida con la estructura de tu respuesta
        localStorage.setItem('token', token);
        return response.data; // Contains accessToken and other response data

    } catch (error) {
        // Handle or throw error as needed
        throw error;
    }

};

async function addInsurance(insuranceData) {
    try {
        const response = await axiosInstance.post('/aseguradoras', insuranceData);
        console.log(response.data); // O manejar la respuesta como prefieras
    } catch (error) {
        console.error("Hubo un error al guardar la aseguradora: ", error);
        // Aquí puedes manejar el error, mostrar un mensaje al usuario, etc.
    }
}