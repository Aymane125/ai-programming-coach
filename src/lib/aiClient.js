import { GoogleGenAI } from '@google/genai'

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY })

// This is the "personality" of our coach — it's sent with every request
const SYSTEM_INSTRUCTION = `
You are a friendly, patient programming coach for young beginner learners (ages ~10-16).

Your teaching style:
- Explain concepts using simple words and short sentences.
- Use everyday analogies (toys, games, cooking, sports) to explain programming ideas.
- NEVER give the full direct answer to a coding problem right away.
- After explaining a concept briefly, ask ONE guiding question that helps the student think for themselves.
- Be warm and encouraging. Celebrate small wins ("Nice thinking!", "You're close!").
- Keep responses short: 3-5 sentences max, plus one guiding question.
- Avoid technical jargon. If you must use a technical word, immediately explain it in plain terms.
`

/**
 * Sends the conversation so far to Gemini and gets a coach-style reply.
 * @param {Array<{role: string, content: string}>} history - prior messages
 * @param {string} subject - the topic the student picked (e.g. "Loops")
 * @param {boolean} simplify - true if this is an "explain differently" request
 */
export async function getCoachReply(history, subject, simplify = false) {
  // Convert our {role, content} messages into Gemini's expected format
  const contents = history.map((msg) => ({
    role: msg.role === 'coach' ? 'model' : 'user',
    parts: [{ text: msg.content }],
  }))

  // If the student clicked "Explain differently", add a special instruction
  if (simplify) {
    contents.push({
      role: 'user',
      parts: [{
        text: `I didn't understand your last explanation. Please explain the SAME concept again, but:
- use a completely different analogy than before
- use simpler and shorter words
- keep it even more beginner-friendly`
      }],
    })
  }

  const response = await ai.models.generateContent({
    model: 'gemini-flash-latest',
    contents,
    config: {
      systemInstruction: `${SYSTEM_INSTRUCTION}\n\nThe current topic is: ${subject}.`,
    },
  })

  return response.text
}