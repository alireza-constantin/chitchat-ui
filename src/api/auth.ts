import { loginType } from "@/types/auth"
import { authApi } from "./config"

export const login = async (data: loginType) => {
    const res = await authApi.post("/auth/login", data)
    return res
}


