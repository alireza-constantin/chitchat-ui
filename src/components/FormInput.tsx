type FormInput = {
    label: string
}

export const FormInput: React.FC<FormInput> = ({ label }) => {
    return (
        <div className="form-control rounded-md px-5 py-3 flex mb-1 w-full justify-center bg-zinc-900">
            <label className="text-sm pb-1 text-gray-400 font-medium capitalize" htmlFor={label}>
                {label}
            </label>
            <input className="bg-transparent text-white p-0 h-6 border-none outline-none" id={label} />
        </div>
    )
}
