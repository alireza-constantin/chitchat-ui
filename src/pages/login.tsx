import { FormInput } from "../components/FormInput"
import { Link } from "react-router-dom"
import axios from "axios"
import z from "zod"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const fields = ["email", "password"] as const

const registerSchema = z.object({
    email: z.string().email(),
    password: z.string(),
})

type registerType = z.infer<typeof registerSchema>

export default function Login() {
    const {
        register,
        // formState: { errors },
        handleSubmit,
    } = useForm<registerType>({
        resolver: zodResolver(registerSchema),
    })

    const submitHandler: SubmitHandler<registerType> = async ({ email, password }) => {
        console.log(email, password)
        const res = await axios.post(
            "http://localhost:3000/api/auth/login",
            { email, password },
            { withCredentials: true }
        )
        console.log(res.data)
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(submitHandler)}
                className="mx-auto pt-32  container px-4 lg:w-3/5"
            >
                {fields.map((field) => (
                    <FormInput register={register(field)} label={field} key={field} />
                ))}
                <button className="btn btn-primary capitalize h-16 w-full">Login</button>
            </form>
            <p className="text-center text-gray-200 font-semibold  text-xs mt-3">
                Do not have an account?{" "}
                <Link to="/register" className="underline">
                    Register
                </Link>
            </p>
        </>
    )
}
