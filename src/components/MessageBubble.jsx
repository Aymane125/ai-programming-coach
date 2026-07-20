export default function MessageBubble({ role, content }) {
  const isCoach = role === 'coach'

  return (
    <div className={`flex ${isCoach ? 'justify-start' : 'justify-end'} mb-3`}>
      <div
        className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed
          ${isCoach
            ? 'bg-white border border-gray-200 text-gray-800 rounded-bl-sm'
            : 'bg-indigo-600 text-white rounded-br-sm'
          }`}
      >
        {content}
      </div>
    </div>
  )
}