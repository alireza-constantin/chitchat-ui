// import { useParams } from "react-router-dom"
import axios from "axios"
import { ProfilePic } from "../ProfilePic"
import { useEffect } from "react"

export default function Chat() {
    

    return (
        <div className="w-full max-h-screen overflow-hidden">
            <div className="flex flex-col justify-between h-full overflow-y-hidden">
                <div
                    className="w-full flex items-center bg-zinc-900 
            flex-start h-[64px] pl-6 gap-4"
                >
                    <ProfilePic />
                    <h5 className="text-lg text-gray-100">Albert Einsten</h5>
                </div>
                {/* chat screen */}

                <div className="flex-1 px-6 flex flex-col-reverse gap-2 py-2 overflow-y-auto no-scrollbar">
                    <ChatMessage text="hahhaha" />
                    <ChatMessage text="ok ok ok" />
                    <ChatMessage  text="la lal all al" />
                    <ChatMessage  text="la lal all al" />
                    <ChatMessage  text="la lal all al" />
                    <ChatMessage  text="la lal all al" />
                    <ChatMessage  text="la lal all al" />
                    <ChatMessage  text="la lal all al" />
                    <ChatMessage  text="la lal all al" />
                    <ChatMessage  text="la lal all al" />
                    <ChatMessage  text="alpacino ha ha" />
                </div>
                <div className="w-full h-20  p-4 bg-zinc-800">
                    <input
                        placeholder="Write to Albert Einsten"
                        className=" 
                bg-zinc-900 w-full focus:outline-none text-gray-200 placeholder:text-zinc-500 px-4 py-3 rounded-md"
                    />
                </div>
            </div>
        </div>
    )
}

function ChatMessage({text}: {text: string}) {
    return (
        <div className="flex gap-2 mb-2">
            <div className=" avatar">
                <div className="w-8 h-8 rounded-full bg-pink-500"></div>
            </div>
            <div>
                <div className="flex gap-2 items-center">
                    <p className="text-blue-500 font-medium text-base">Albert Einsten</p>
                    <time className="text-xs opacity-50">Today at 12:45</time>
                </div>
                <div className="text-sm text-gray-100">
                    <div>hello how are you baby?</div>
                    <div>{text}</div>
                    <div>not see u in like forever?</div>
                </div>
            </div>
        </div>
    )
}
