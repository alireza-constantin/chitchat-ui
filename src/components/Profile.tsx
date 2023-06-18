import { clsx } from "clsx"

export function Profile({ expanded }: { expanded: boolean }) {
    return (
        <div className="flex gap-4 items-center bg-zinc-900 py-3 h-16 px-5 justify-start">
            <ProfilePic />
            {expanded && (
                <div className="w-3/4 transition-all duration-1000 animate-[unhide_200ms_ease-in-out_forwards]">
                    <p className="text-gray-100 text-sm font-semibold pb-1">Jimmy Anderson</p>
                    <p className="text-xs text-gray-300 truncate">last test expanded</p>
                </div>
            )}
        </div>
    )
}

function ProfilePic() {
    return <div className="w-8 h-8 bg-red-600 rounded-full flex-shrink-0"></div>
}
