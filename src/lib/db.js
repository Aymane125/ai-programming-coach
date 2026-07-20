import { supabase } from './supabaseClient'

// Create a new session when the student starts a subject
export async function createSession(userId, subject) {
  const { data, error } = await supabase
    .from('sessions')
    .insert({ user_id: userId, subject })
    .select()
    .single()

  if (error) throw error
  return data // includes the new session's id
}

// Save one message (student or coach) to a session
export async function saveMessage(sessionId, role, content) {
  const { data, error } = await supabase
    .from('messages')
    .insert({ session_id: sessionId, role, content })
    .select()
    .single()

  if (error) throw error
  return data // includes the new message's id
}

// Save a Yes / Explain differently click
export async function saveFeedback(messageId, understood) {
  const { error } = await supabase
    .from('feedback')
    .insert({ message_id: messageId, understood })

  if (error) throw error
}

// Load all past sessions for a user (most recent first)
export async function getSessions(userId) {
  const { data, error } = await supabase
    .from('sessions')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

// Load all messages for one session (in order)
export async function getMessages(sessionId) {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .eq('session_id', sessionId)
    .order('created_at', { ascending: true })

  if (error) throw error
  return data
}