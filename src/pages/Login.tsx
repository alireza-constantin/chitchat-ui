import { FormInput } from "../components/formInput"

export default function Login() {
    return (
        <>
            <form className="mx-auto pt-32  container px-4 lg:w-3/5">
                <FormInput label="email" />
                <FormInput label="password" />
                <button className="btn btn-primary capitalize h-16 w-full">Login</button>
            </form>
            <p className="text-center text-gray-200 font-semibold  text-xs mt-3">
                Do not have an account? <span className="underline">Register</span>
            </p>
        </>
    )
}
