import formatDistance from "date-fns/formatDistance";

export default function ChatMessage({ text, date }: { text: string; date: string }) {
    const formatedDate = formatDistance(new Date(date), new Date(), { addSuffix: true })

    return (
        <div className="text-gray-100 ml-6 chat-bubble bg-slate-700 mb-1">
            <div className="text-sm">{text}</div>
            <p className="sm:text-[10px] text-[8px] pt-[1px]  text-right opacity-50">
                {formatedDate}
            </p>
        </div>
    )
}
