function formatTime(date) {
  if (!date) return ''
  return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

export default function MessageBubble({ role, content, createdAt }) {
  const isCoach = role === 'coach'

  const avatar = (
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0
        ${isCoach ? 'bg-[#2EC4B6] text-white' : 'bg-[#14213D] text-white'}`}
    >
      {isCoach ? '🤖' : '🧑'}
    </div>
  )

  const bubble = (
    <div className="max-w-[75%]">
      <div
        className={`px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm
          ${isCoach
            ? 'bg-[#FAF7F0] border border-gray-100 text-[#1B1B1F] rounded-bl-sm'
            : 'bg-[#14213D] text-white rounded-br-sm'
          }`}
      >
        {content}
      </div>
      {createdAt && (
        <div className={`text-[10px] text-[#1B1B1F]/40 mt-1 ${isCoach ? 'text-left' : 'text-right'}`}>
          {formatTime(createdAt)}
        </div>
      )}
    </div>
  )

  return (
    <div className={`flex items-end gap-2 ${isCoach ? 'justify-start' : 'justify-end'}`}>
      {isCoach ? (
        <>
          {avatar}
          {bubble}
        </>
      ) : (
        <>
          {bubble}
          {avatar}
        </>
      )}
    </div>
  )
}