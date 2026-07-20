import { useNavigate } from 'react-router-dom'

const SUBJECTS = [
  {
    name: 'Variables',
    icon: '📦',
    description: 'Learn how programs store and remember information.',
  },
  {
    name: 'Loops',
    icon: '🔁',
    description: 'Discover how to repeat actions without writing them twice.',
  },
  {
    name: 'Functions',
    icon: '🧩',
    description: 'Build reusable blocks of instructions you can call anytime.',
  },
  {
    name: 'Conditionals',
    icon: '🚦',
    description: 'Teach your code to make decisions based on what happens.',
  },
  {
    name: 'Arrays',
    icon: '🗂️',
    description: 'Organize many pieces of data together, in order.',
  },
]

function SubjectsPage() {
  const navigate = useNavigate()

  const handleSelect = (subject) => {
    navigate(`/chat?subject=${encodeURIComponent(subject)}`)
  }

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }} className="min-h-screen bg-[#FAF7F0] text-[#1B1B1F]">
      <div className="max-w-5xl mx-auto px-6 py-16">

        <div className="text-center mb-12">
          <span
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
            className="inline-block text-xs text-[#14213D] bg-[#FFC857]/30 rounded-full px-3 py-1 mb-4"
          >
            Pick a topic
          </span>
          <h1 style={{ fontFamily: 'Quicksand, sans-serif' }} className="text-3xl md:text-4xl font-semibold mb-3">
            What do you want to learn today?
          </h1>
          <p className="text-[#1B1B1F]/60 max-w-lg mx-auto">
            Choose a topic below and your coach will start a new session, ready to help.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {SUBJECTS.map((s) => (
            <button
              key={s.name}
              onClick={() => handleSelect(s.name)}
              className="group text-left bg-white rounded-2xl p-6 shadow-sm border border-transparent
                         hover:shadow-lg hover:border-[#2EC4B6]/30 hover:-translate-y-1
                         transition-all duration-200"
            >
              <div className="text-3xl mb-4 transition-transform duration-200 group-hover:scale-110">
                {s.icon}
              </div>
              <h3 style={{ fontFamily: 'Quicksand, sans-serif' }} className="font-semibold text-lg mb-2">
                {s.name}
              </h3>
              <p className="text-sm text-[#1B1B1F]/60 leading-relaxed">
                {s.description}
              </p>
              <span
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
                className="inline-block mt-4 text-xs text-[#2EC4B6] opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Start session →
              </span>
            </button>
          ))}
        </div>

      </div>
    </div>
  )
}

export default SubjectsPage