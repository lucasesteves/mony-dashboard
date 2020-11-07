import axios from 'axios';
import { AxiosInstance } from 'axios';

export const instance:AxiosInstance= axios.create({
    baseURL:'http://localhost:4000'
})

export const setToken = (token:string) => {
    return instance.defaults.headers.Authorization = token 
}
