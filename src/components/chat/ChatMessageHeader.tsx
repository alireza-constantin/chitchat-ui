import clsx from "clsx";

type ChatMessageHeaderProps = {
    user: { name: string; isAuthor: boolean }
    children: React.ReactNode
}

export default function ChatMessageHeader({ user, children }: ChatMessageHeaderProps) {
    return (
        <div>
            <div className="flex gap-2 items-center mb-2 mt-4">
                <div className=" avatar">
                    <div
                        className={clsx(
                            "w-8 h-8 rounded-full",
                            user.isAuthor ? "bg-sky-500" : "bg-amber-400"
                        )}
                    ></div>
                </div>
                <div>
                    <div className="flex gap-2 items-center">
                        <p
                            className={clsx(
                                "font-medium text-lg capitalize",
                                user.isAuthor ? "text-sky-400" : "text-amber-400"
                            )}
                        >
                            {user.name}
                        </p>
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}
