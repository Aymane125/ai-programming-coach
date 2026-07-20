const SUBJECTS = ['Variables', 'Loops', 'Functions', 'Conditionals', 'Arrays']

export default function SubjectSelector({ subject, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2 px-6 py-3 bg-white border-b border-gray-100 shrink-0">
      {SUBJECTS.map((s) => (
        <button
          key={s}
          onClick={() => onSelect(s)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition
            ${subject === s
              ? 'bg-[#14213D] text-white'
              : 'bg-[#14213D]/5 text-[#14213D] hover:bg-[#14213D]/10'
            }`}
        >
          {s}
        </button>
      ))}
    </div>
  )
}