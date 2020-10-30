import axios from 'axios';


export const axiosInstance = axios.create({
    url : 'http://192.168.0.7:8000/'
});
