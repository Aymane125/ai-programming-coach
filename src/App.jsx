import { useState, useEffect } from 'react'
import SubjectSelector from './components/SubjectSelector'
import ChatWindow from './components/ChatWindow'
import ChatInput from './components/ChatInput'
import { getCoachReply } from './lib/aiClient'
import { createSession, saveMessage, saveFeedback } from './lib/db'
import { getUserId } from './lib/userId'

function App() {
  const [subject, setSubject] = useState('Variables')
  const [messages, setMessages] = useState([])
  const [checkedMessageIds, setCheckedMessageIds] = useState([])
  const [loading, setLoading] = useState(false)
  const [sessionId, setSessionId] = useState(null)

  const userId = getUserId()

  // Start a fresh session whenever the subject changes
  useEffect(() => {
    async function startSession() {
      try {
        const session = await createSession(userId, subject)
        setSessionId(session.id)
        setMessages([])
        setCheckedMessageIds([])
      } catch (err) {
        console.error('Failed to create session:', err)
      }
    }
    startSession()
  }, [subject])

  const handleSend = async (text) => {
    if (!sessionId) return

    setLoading(true)
    try {
      // 1. Save + show the student's message
      const savedStudentMsg = await saveMessage(sessionId, 'student', text)
      const studentMsg = { id: savedStudentMsg.id, role: 'student', content: text }
      const updatedMessages = [...messages, studentMsg]
      setMessages(updatedMessages)

      // 2. Ask the AI for a coach reply
      const replyText = await getCoachReply(updatedMessages, subject)

      // 3. Save + show the coach's reply
      const savedCoachMsg = await saveMessage(sessionId, 'coach', replyText)
      const coachMsg = { id: savedCoachMsg.id, role: 'coach', content: replyText }
      setMessages((prev) => [...prev, coachMsg])
    } catch (err) {
      console.error('Error:', err)
      const errorMsg = {
        id: crypto.randomUUID(),
        role: 'coach',
        content: "Oops, I had trouble thinking that through. Can you try asking again?",
      }
      setMessages((prev) => [...prev, errorMsg])
    } finally {
      setLoading(false)
    }
  }

  const handleYes = async (messageId) => {
    setCheckedMessageIds((prev) => [...prev, messageId])
    try {
      await saveFeedback(messageId, true)
    } catch (err) {
      console.error('Failed to save feedback:', err)
    }
  }

  const handleExplainDifferently = async (messageId) => {
    setCheckedMessageIds((prev) => [...prev, messageId])
    setLoading(true)

    try {
      await saveFeedback(messageId, false)

      const replyText = await getCoachReply(messages, subject, true)

      const savedCoachMsg = await saveMessage(sessionId, 'coach', replyText)
      const coachMsg = { id: savedCoachMsg.id, role: 'coach', content: replyText }
      setMessages((prev) => [...prev, coachMsg])
    } catch (err) {
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <header className="p-4 bg-indigo-600 text-white text-lg font-semibold">
        🚀 AI Programming Coach
      </header>
      <SubjectSelector subject={subject} onSelect={setSubject} />
      <ChatWindow
        messages={messages}
        checkedMessageIds={checkedMessageIds}
        onYes={handleYes}
        onExplainDifferently={handleExplainDifferently}
      />
      {loading && (
        <div className="text-xs text-gray-400 text-center pb-1">Coach is thinking...</div>
      )}
      <ChatInput onSend={handleSend} disabled={loading} />
    </div>
  )
}

export default App