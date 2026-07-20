function AboutPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }} className="max-w-2xl mx-auto px-6 py-16 text-[#1B1B1F]">
      <h1 style={{ fontFamily: 'Quicksand, sans-serif' }} className="text-3xl font-semibold mb-4">
        About CodeBuddy
      </h1>
      <p className="text-[#1B1B1F]/70 leading-relaxed mb-4">
        CodeBuddy is an AI programming coach built for beginner learners. Instead of
        handing over direct answers, it explains ideas step by step and asks guiding
        questions — helping you actually understand a concept, not just copy a solution.
      </p>
      <p className="text-[#1B1B1F]/70 leading-relaxed mb-4">
        This project supports UN Sustainable Development Goal 4: Quality Education,
        by making programming concepts more approachable for young learners.
      </p>
      <p className="text-[#1B1B1F]/50 text-sm">
        Built with React, Tailwind CSS, Supabase, and Gemini.
      </p>
    </div>
  )
}

export default AboutPage