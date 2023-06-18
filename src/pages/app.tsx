import { useState } from "react"
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/solid"
import { Profile } from "../components/Profile"
import { SquaresPlusIcon } from "@heroicons/react/24/outline"

export default function App() {
    const [expanded, setExpanded] = useState(false)

    const toggleSidebar = () => {
        setExpanded((prev) => !prev)
    }
    return (
        <div
            className={`fixed border-r-2 border-zinc-700 top-0 bottom-0 transition-all ${
                expanded ? "sm:max-w-[280px] sm:w-full w-280px" : "left-0 w-[60px] sm:w-[280px]"
            }`}
        >
            <div className="flex justify-between items-center p-3 mb-1 bg-zinc-900">
                <h4 className="text-gray-100  text-lg">Conversation</h4>
                <SquaresPlusIcon className="w-6 h-6 text-gray-100" />
            </div>
            <div className="">
                <ul className="flex flex-col gap-1">
                    <Profile />
                    <Profile />
                    <Profile />
                    <Profile />
                </ul>
            </div>
            <button
                className="absolute bg-transparent  rounded-e-3xl px-1 py-4 top-1/2 -right-2"
                onClick={toggleSidebar}
            >
                {expanded ? (
                    <ChevronDoubleLeftIcon className="text-gray-200 w-5 h-5" />
                ) : (
                    <ChevronDoubleRightIcon className="text-gray-200 w-5 h-5" />
                )}
            </button>
        </div>
    )
}
