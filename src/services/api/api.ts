import axios from "axios";
import { AxiosInstance } from "axios";
import { persistor } from "../../store";

export const instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const setToken = (token: string) =>
  (instance.defaults.headers.Authorization = token);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error.response);
    if (error.response.status === 401) {
      persistor.purge();
      error.response.data.deny && window.location.reload();
    }
    if (error.response.status === 403) {
      persistor.purge();
      error.response.data.deny && window.location.reload();
    } else {
      return Promise.reject(error);
    }
  }
);
