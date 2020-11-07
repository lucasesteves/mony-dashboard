import axios from 'axios';
import { AxiosInstance } from 'axios';
import { persistor } from '../../store';

export const instance:AxiosInstance= axios.create({
    baseURL:'http://localhost:4000'
})

// instance.interceptors.response.use((response) => response, (error) => {
// if (error && error.response && error.response.status === 401) {
//     localStorage.setItem('persist:webdesk-admin', '');
//     window.location.reload(); //forçando reload para voltar a tela de login
// }

// instance.interceptors.response.use(
//     (response) => {
//       if (response.data.errors) {
//         if (response.data.errors[0].message == "Unauthorized") persistor.purge();
//       }
//       return response;
//     },
//     (error) => {
//       if (error && error.response && 401 === error.response.status) {
//         persistor.purge();
//       } else {
//         return Promise.reject(error);
//       }
//     });
// });

export const setToken = (token:string) => {
    return instance.defaults.headers.Authorization = token 
}

// export default instance;