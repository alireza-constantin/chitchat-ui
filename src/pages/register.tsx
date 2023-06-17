import { FormInput } from "../components/formInput"

export default function Register() {
    return (
        <>
            <form className="mx-auto pt-32  container px-4 lg:w-3/5">
                <FormInput label="email" />
                <div className="flex flex-col sm:flex-row sm:gap-1 justify-between">
                    <FormInput label="First Name" />
                    <FormInput label="Last Name" />
                </div>
                <FormInput label="password" />
                <button className="btn btn-primary capitalize h-16 w-full">
                    Create My Account
                </button>
            </form>
            <p className="text-center text-gray-200 font-semibold  text-xs mt-3">
                Already have an account? <span className="underline">Login</span>
            </p>
        </>
    )
}
