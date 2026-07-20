import { useState } from 'react'

export default function ChatInput({ onSend, disabled }) {
  const [text, setText] = useState('')

  const handleSend = () => {
    if (!text.trim()) return
    onSend(text)
    setText('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="px-6 py-4 bg-white border-t border-gray-100 shrink-0">
      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder="Ask your coach anything..."
          className="flex-1 px-5 py-3 rounded-full border border-gray-200 text-sm
                     focus:outline-none focus:ring-2 focus:ring-[#2EC4B6]/40 focus:border-[#2EC4B6]
                     disabled:bg-gray-50 transition"
        />
        <button
          onClick={handleSend}
          disabled={disabled || !text.trim()}
          className="w-11 h-11 shrink-0 rounded-full bg-[#14213D] text-white
                     flex items-center justify-center hover:bg-[#1B1B1F]
                     disabled:opacity-30 disabled:cursor-not-allowed transition"
          aria-label="Send message"
        >
          ➤
        </button>
      </div>
    </div>
  )
}