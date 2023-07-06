import { FormInput } from "../components/shared/FormInput"
import { Link, useNavigate } from "react-router-dom"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginType, loginSchema } from "@/types"
import { login } from "@/api/auth"
import { AxiosError } from "axios"
import { toast } from "react-hot-toast"
import { handleError } from "@/utils/handleResponseError"
import { useState } from "react"

const fields = ["email", "password"] as const

export default function Login() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<LoginType>({
        resolver: zodResolver(loginSchema),
    })

    const submitHandler: SubmitHandler<LoginType> = async ({ email, password }) => {
        setLoading(true)
        try {
            await login({ email, password })
            navigate("/")
        } catch (error) {
            if (error instanceof AxiosError) {
                const err = handleError(error)
                err && toast.error(err.message)
            } else {
                console.log(error)
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(submitHandler)}
                className="mx-auto pt-32  container px-4 lg:w-3/5"
            >
                {fields.map((field) => (
                    <FormInput
                        register={register(field)}
                        label={field}
                        key={field}
                        error={errors[field]}
                    />
                ))}
                <button
                    type="submit"
                    className="btn bg-indigo-700 hover:bg-indigo-600 rounded-md capitalize h-16 w-full"
                >
                    {loading ? <div className="loading loading-dots w-[50px]" /> : <>Login</>}
                </button>
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
