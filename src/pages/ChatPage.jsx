import { useState, useEffect, useRef } from 'react'
import SubjectSelector from '../components/SubjectSelector'
import ChatWindow from '../components/ChatWindow'
import ChatInput from '../components/ChatInput'
import { getCoachReply } from '../lib/aiClient'
import { createSession, saveMessage, saveFeedback } from '../lib/db'
import { getUserId } from '../lib/userId'
import { useSearchParams } from 'react-router-dom'

function ChatPage() {
  const [searchParams] = useSearchParams()
  const [subject, setSubject] = useState(searchParams.get('subject') || 'Variables')
  const [messages, setMessages] = useState([])
  const [checkedMessageIds, setCheckedMessageIds] = useState([])
  const [loading, setLoading] = useState(false)
  const [sessionId, setSessionId] = useState(null)
  const creatingSession = useRef(false)

  const userId = getUserId()

  // Start a fresh session whenever the subject changes
  useEffect(() => {
  async function startSession() {
    if (creatingSession.current) return
    creatingSession.current = true

    try {
      const session = await createSession(userId, subject)
      setSessionId(session.id)
      setCheckedMessageIds([])

      const welcomeText = `Hi! I'm your coach for ${subject}. What would you like to explore first?`
      const savedWelcome = await saveMessage(session.id, 'coach', welcomeText)
      setMessages([{ id: savedWelcome.id, role: 'coach', content: welcomeText, createdAt: new Date() }])
    } catch (err) {
      console.error('Failed to create session:', err)
    } finally {
      creatingSession.current = false
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
      const studentMsg = { id: savedStudentMsg.id, role: 'student', content: text, createdAt: new Date() }
      const updatedMessages = [...messages, studentMsg]
      setMessages(updatedMessages)

      // 2. Ask the AI for a coach reply
      const replyText = await getCoachReply(updatedMessages, subject)

      // 3. Save + show the coach's reply
      const savedCoachMsg = await saveMessage(sessionId, 'coach', replyText)
      const coachMsg = { id: savedCoachMsg.id, role: 'coach', content: replyText, createdAt: new Date() }
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
  <div className="min-h-screen bg-[#14213D] flex justify-center">
    <div className="w-full max-w-3xl bg-white md:my-6 md:rounded-2xl md:shadow-2xl flex flex-col h-screen md:h-[calc(100vh-3rem)] overflow-hidden">

      <header className="px-6 py-4 border-b border-gray-100 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-lg">🤖</span>
          <span style={{ fontFamily: 'Quicksand, sans-serif' }} className="font-semibold text-[#14213D]">
            CodeBuddy
          </span>
        </div>
        <span style={{ fontFamily: 'JetBrains Mono, monospace' }} className="text-xs text-[#1B1B1F]/40">
          {subject}
        </span>
      </header>

      <SubjectSelector subject={subject} onSelect={setSubject} />

      <ChatWindow
        messages={messages}
        checkedMessageIds={checkedMessageIds}
        onYes={handleYes}
        onExplainDifferently={handleExplainDifferently}
        loading={loading}
      />

      <ChatInput onSend={handleSend} disabled={loading} />
    </div>
  </div>
)
}

export default ChatPage 