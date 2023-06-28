import { LoginType, RegisterType } from "@/types/auth"
import { api, withCredConf } from "./config"

export const login = async (data: LoginType) => {
    const res = await api.post("/auth/login", data, withCredConf)
    return res
}

export const register = async (data: RegisterType) => {
    const res = await api.post("/auth/register", data, withCredConf)
    return res
}

