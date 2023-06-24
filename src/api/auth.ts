import { LoginType, RegisterType } from "@/types/auth"
import { authApi } from "./config"

export const login = async (data: LoginType) => {
    const res = await authApi.post("/auth/login", data)
    return res
}

export const register = async (data: RegisterType) => {
    const res = await authApi.post("/auth/register", data)
    return res
}

