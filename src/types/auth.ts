import z from 'zod'

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4,{  message: "password can't be less than 4 character" }),
})

export type loginType = z.infer<typeof loginSchema>
