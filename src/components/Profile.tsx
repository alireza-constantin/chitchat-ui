import { clsx } from 'clsx'

export function Profile({ expanded }: { expanded: boolean }){
    return (
        <div className={clsx("flex gap-4 items-center bg-zinc-900 py-3 justify-center", expanded && "px-5")}>
            <ProfilePic />
            {expanded && <div>
                <p className="text-gray-100 text-sm font-semibold pb-1">Jimmy Anderson</p>
                <p className="text-xs text-gray-300" >last message sent</p>
            </div>}
        </div>
    )
}


function ProfilePic(){
    return (
        <div className="w-8 h-8 bg-red-600 rounded-full"></div>
    )
}