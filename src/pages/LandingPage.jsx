import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigate = useNavigate()

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }} className="bg-[#FAF7F0] text-[#1B1B1F]">

      {/* ---------- HERO ---------- */}
      <section className="bg-[#14213D] text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

          {/* Left: name, tagline, CTA */}
          <div>
            <span
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
              className="inline-block text-xs text-[#FFC857] border border-[#FFC857]/40 rounded-full px-3 py-1 mb-6"
            >
              AI Programming Coach
            </span>

            <h1
              style={{ fontFamily: 'Quicksand, sans-serif' }}
              className="text-4xl md:text-5xl font-semibold leading-tight mb-4"
            >
              Code<span className="text-[#FFC857]">Buddy</span>
            </h1>

            <p className="text-lg text-white/80 mb-8 max-w-md">
              Learn programming with a coach that explains ideas step by step —
              and asks you questions instead of just giving the answer.
            </p>

            <button
              onClick={() => navigate('/subjects')}
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
              className="group inline-flex items-center gap-2 bg-[#FFC857] text-[#14213D] font-medium px-6 py-3 rounded-full hover:bg-[#ffd57a] transition"
            >
              &gt; Start learning
              <span className="animate-pulse">_</span>
            </button>
          </div>

          {/* Right: mock chat card — the signature element */}
          <div className="bg-[#FAF7F0] rounded-2xl shadow-2xl p-5 text-[#1B1B1F] max-w-sm mx-auto w-full">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#2EC4B6] flex items-center justify-center text-white text-sm">
                🤖
              </div>
              <span className="text-sm font-medium">CodeBuddy</span>
            </div>

            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 text-sm mb-3 shadow-sm">
              A loop is like doing jumping jacks — you repeat the same move
              until you hit a number you decide beforehand.
            </div>

            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 text-sm shadow-sm relative inline-block">
              What do you think would happen if we never told it when to stop?
              <span className="absolute left-3 -bottom-1 w-24 h-1.5 bg-[#FFC857] rounded-full" />
            </div>

            <div className="flex justify-end mt-3">
              <div className="bg-[#3A86FF] text-white rounded-2xl rounded-br-sm px-4 py-2 text-sm max-w-[70%]">
                It would go on forever?
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ---------- FEATURE CARDS ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-3">🤖</div>
            <h3 style={{ fontFamily: 'Quicksand, sans-serif' }} className="font-semibold text-lg mb-2">
              AI Programming Coach
            </h3>
            <p className="text-sm text-[#1B1B1F]/70">
              A patient AI tutor that adapts explanations to how you learn, not a script.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-3">💡</div>
            <h3 style={{ fontFamily: 'Quicksand, sans-serif' }} className="font-semibold text-lg mb-2">
              Easy Explanations
            </h3>
            <p className="text-sm text-[#1B1B1F]/70">
              Didn't click the first time? Ask for a new analogy in one tap.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-3">🎯</div>
            <h3 style={{ fontFamily: 'Quicksand, sans-serif' }} className="font-semibold text-lg mb-2">
              Learn by Thinking
            </h3>
            <p className="text-sm text-[#1B1B1F]/70">
              Guiding questions instead of direct answers, so ideas actually stick.
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}

export default LandingPage