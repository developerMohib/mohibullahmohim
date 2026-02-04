import axios, { AxiosInstance } from 'axios';
// http://localhost:4000/api
const instance: AxiosInstance = axios.create({
    baseURL: 'https://appmohibullahmohim.vercel.app/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;