import z from 'zod'

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4,{  message: "password can't be less than 4 character" }),
})

export const registerSchema = z.object({
    email: z.string().email(),
    firstName: z.string().min(2, { message: "first name can't be less than 4 character" }),
    lastName: z.string().min(2, { message: "last name can't be less than 4 character" }),
    password: z.string().min(4, { message: "password can't be less than 4 character" }),
})

export type LoginType = z.infer<typeof loginSchema>
export type RegisterType = z.infer<typeof registerSchema>

export type AuthUser = {
    createdAt: string,
    updatedAt: string,
    email: string,
    firstName: string,
    lastName: string,
    id: number
}