import { useEffect, useState } from "react"
import { Profile } from "../components/Profile"
import { SquaresPlusIcon, Bars4Icon } from "@heroicons/react/24/outline"
import clsx from "clsx"

export default function App() {
    const [expanded, setExpanded] = useState(false)

    const toggleSidebar = () => {
        setExpanded((prev) => !prev)
    }

     useEffect(() => {
         const handleResize = () => {
             const isBigger = window.innerWidth > 640
             isBigger && setExpanded(true)
         }

         // Initial check on component mount
         handleResize()

         // Event listener for window resize
         window.addEventListener("resize", handleResize)

         // Clean up the event listener on component unmount
         return () => {
             window.removeEventListener("resize", handleResize)
         }
     }, [])



    return (
        <>
            {expanded && (
                <div onClick={toggleSidebar} className="absolute sm:hidden inset-0 bg-black/40 z-10"></div>
            )}
            <div
                className={clsx(
                    "fixed z-20 overflow-y-scroll no-scrollbar border-r-2 bg-zinc-800 border-zinc-700",
                    "top-0 bottom-0 duration-200 transition-all",
                    expanded ? "sm:max-w-[280px] w-[280px]" : "left-0 w-[72px] sm:w-[280px]"
                )}
            >
                <div
                    className="sticky top-0 z-30 border-b-2 border-zinc-700 
                flex justify-between items-center p-3 h-16  bg-zinc-900"
                >
                    {expanded ? (
                        <>
                            <h4 className="text-gray-100  text-lg">Conversation</h4>
                            <SquaresPlusIcon className="w-6 h-6 text-gray-100" />
                        </>
                    ) : (
                        <button
                            className="sm:hidden bg-transparent mx-auto"
                            onClick={toggleSidebar}
                        >
                            <Bars4Icon className="text-gray-100 h-6 w-6" />
                        </button>
                    )}
                </div>
                <div className="">
                    <ul className="flex flex-col gap-1">
                        <Profile expanded={expanded} />
                        <Profile expanded={expanded} />
                        <Profile expanded={expanded} />
                        <Profile expanded={expanded} />
                        <Profile expanded={expanded} />
                        <Profile expanded={expanded} />
                        <Profile expanded={expanded} />
                        <Profile expanded={expanded} />
                        <Profile expanded={expanded} />
                        <Profile expanded={expanded} />
                        <Profile expanded={expanded} />
                        <Profile expanded={expanded} />
                        <Profile expanded={expanded} />
                        <Profile expanded={expanded} />
                        <Profile expanded={expanded} />
                        <Profile expanded={expanded} />
                        <Profile expanded={expanded} />
                        <Profile expanded={expanded} />
                        <Profile expanded={expanded} />
                        <Profile expanded={expanded} />
                        <Profile expanded={expanded} />
                        <Profile expanded={expanded} />
                        <Profile expanded={expanded} />
                        <Profile expanded={expanded} />
                        <Profile expanded={expanded} />
                    </ul>
                </div>
            </div>
        </>
    )
}
