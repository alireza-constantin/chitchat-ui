import { type RegisterType, registerSchema } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { type SubmitHandler, useForm } from "react-hook-form"
import { FormInput } from "../components/shared/FormInput"
import { Link } from "react-router-dom"
import { handleError } from "@/utils/handleResponseError"
import { AxiosError } from "axios"
import toast from "react-hot-toast"
import { register as signup } from "@/api/auth"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Register() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<RegisterType>({
        resolver: zodResolver(registerSchema),
    })

    const submitHandler: SubmitHandler<RegisterType> = async (data) => {
        setLoading(true)
        try {
            await signup(data)
            navigate("/login")
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
                <FormInput label="email" register={register("email")} error={errors["email"]} />
                <div className="flex flex-col sm:flex-row sm:gap-1 justify-between">
                    <FormInput
                        label="First Name"
                        register={register("firstName")}
                        error={errors["firstName"]}
                    />
                    <FormInput
                        label="Last Name"
                        register={register("lastName")}
                        error={errors["lastName"]}
                    />
                </div>
                <FormInput
                    label="password"
                    register={register("password")}
                    error={errors["password"]}
                />
                <button
                    type="submit"
                    className="btn bg-indigo-700 hover:bg-indigo-600 rounded-md capitalize h-16 w-full"
                >
                    {loading ? (
                        <div className="loading loading-dots w-[50px]" />
                    ) : (
                        <>Create My Acoount</>
                    )}
                </button>
            </form>
            <p className="text-center text-gray-200 font-semibold  text-xs mt-3">
                Already have an account?{" "}
                <Link to="/login" className="underline">
                    Login
                </Link>
            </p>
        </>
    )
}
