export default function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 mb-4">
      <div className="w-8 h-8 rounded-full bg-[#2EC4B6] text-white flex items-center justify-center text-sm shrink-0">
        🤖
      </div>
      <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex gap-1">
        <span className="w-2 h-2 rounded-full bg-[#1B1B1F]/30 animate-bounce [animation-delay:-0.3s]" />
        <span className="w-2 h-2 rounded-full bg-[#1B1B1F]/30 animate-bounce [animation-delay:-0.15s]" />
        <span className="w-2 h-2 rounded-full bg-[#1B1B1F]/30 animate-bounce" />
      </div>
    </div>
  )
}