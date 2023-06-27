import { ReactNode } from "react"

type Modal = {
    header: string,
    children: ReactNode
}

export default function Modal({ children, header}: Modal){
    return (
        <dialog id="my_modal" className="modal">
            <div className="modal-box py-4">
                <div className="border-b-[1px] border-zinc-700 py-2">
                    <h3 className="font-bold text-lg text-gray-100">{header}</h3>
                </div>
                <div className="pt-4">
                    {children}
                </div>
            </div>
            <form method="dialog" className="modal-backdrop bg-black/30">
                <button>close</button>
            </form>
        </dialog>
    )
}