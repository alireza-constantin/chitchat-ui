import axios from "axios";

export const authApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})