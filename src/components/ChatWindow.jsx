import { useRef, useEffect } from 'react'
import MessageBubble from './MessageBubble'
import UnderstandingCheck from './UnderstandingCheck'
import TypingIndicator from './TypingIndicator'

export default function ChatWindow({ messages, onYes, onExplainDifferently, checkedMessageIds, loading }) {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  return (
    <div className="flex-1 overflow-y-auto px-6 py-6 bg-white scroll-smooth">
      {messages.map((msg) => (
        <div key={msg.id} className="mb-6">
          <MessageBubble role={msg.role} content={msg.content} createdAt={msg.createdAt} />
          {msg.role === 'coach' && (
            <UnderstandingCheck
              disabled={checkedMessageIds.includes(msg.id)}
              onYes={() => onYes(msg.id)}
              onExplainDifferently={() => onExplainDifferently(msg.id)}
            />
          )}
        </div>
      ))}

      {loading && <TypingIndicator />}
      <div ref={bottomRef} />
    </div>
  )
}