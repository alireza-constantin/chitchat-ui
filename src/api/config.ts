import axios, { AxiosRequestConfig } from "axios";


export const withCredConf: AxiosRequestConfig = {
    withCredentials: true
}

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})