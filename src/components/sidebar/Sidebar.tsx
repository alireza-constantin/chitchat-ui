import {useState } from "react"
import { SquaresPlusIcon, Bars4Icon } from "@heroicons/react/24/outline"
import clsx from "clsx"
import Modal from "../shared/modal"
import CreateConversation from "./CreateConversation"
import { Conversations } from "./Conversations"

export default function Sidebar() {
    const [expanded, setExpanded] = useState(true)

    return (
        <>
            <Backdrop expanded={expanded} setExpanded={setExpanded} />
            <div
                className={clsx(
                    "sticky min-h-screen z-20 overflow-y-scroll no-scrollbar border-r-2 bg-zinc-800 border-zinc-700",
                    "top-0 bottom-0 duration-200 transition-all",
                    expanded ? "sm:max-w-[280px] w-[280px]" : "left-0 w-[72px] sm:w-[280px]"
                )}
            >
                <SidebarButton expanded={expanded} setExpanded={setExpanded} />
                    <Conversations expanded={expanded} />
                <Modal header="Create a New Conversation">
                    <CreateConversation />
                </Modal>
            </div>
        </>
    )
}

type SidebarButtonProps = {
    expanded: boolean
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

function SidebarButton({ expanded, setExpanded }: SidebarButtonProps) {
    return (
        <div
            className="sticky top-0 z-30 border-b-2 border-zinc-700 
                    flex justify-between items-center p-3 h-16  bg-zinc-900"
        >
            {expanded ? (
                <>
                    <h4 className="text-gray-100  text-lg">Conversation</h4>
                    <SquaresPlusIcon
                        onClick={() =>
                            (document.getElementById("my_modal") as HTMLDialogElement).showModal()
                        }
                        className="w-6 h-6 text-gray-100 cursor-pointer"
                    />
                </>
            ) : (
                <button
                    className="sm:hidden bg-transparent mx-auto"
                    onClick={() => setExpanded(true)}
                >
                    <Bars4Icon className="text-gray-100 h-6 w-6" />
                </button>
            )}
        </div>
    )
}

type BackdropProps = {
    expanded: boolean
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>
}
function Backdrop({ expanded, setExpanded }: BackdropProps) {
    return (
        <>
            {expanded && (
                <div
                    onClick={() => setExpanded(false)}
                    className="absolute sm:hidden inset-0 bg-black/40 z-10"
                ></div>
            )}
        </>
    )
}

// add when going to prod
// useEffect(() => {
//     const handleResize = () => {
//         const isBigger = window.innerWidth > 640
//         isBigger && setExpanded(true)
//     }

//     // Initial check on component mount
//     handleResize()

//     // Event listener for window resize
//     window.addEventListener("resize", handleResize)

//     // Clean up the event listener on component unmount
//     return () => {
//         window.removeEventListener("resize", handleResize)
//     }
// }, [])
