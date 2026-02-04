import axios, { AxiosInstance } from 'axios';
// https://appmohibullahmohim.vercel.app/api
const instance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:4000/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;