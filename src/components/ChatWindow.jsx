import MessageBubble from './MessageBubble'
import UnderstandingCheck from './UnderstandingCheck'

export default function ChatWindow({ messages, onYes, onExplainDifferently, checkedMessageIds }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
      {messages.length === 0 && (
        <div className="text-center text-gray-400 text-sm mt-10">
          Pick a subject above and ask your first question!
        </div>
      )}

      {messages.map((msg) => (
        <div key={msg.id}>
          <MessageBubble role={msg.role} content={msg.content} />
          {msg.role === 'coach' && (
            <UnderstandingCheck
              disabled={checkedMessageIds.includes(msg.id)}
              onYes={() => onYes(msg.id)}
              onExplainDifferently={() => onExplainDifferently(msg.id)}
            />
          )}
        </div>
      ))}
    </div>
  )
}