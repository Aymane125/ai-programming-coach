const SUBJECTS = ['Variables', 'Loops', 'Functions', 'Conditionals', 'Arrays']

export default function SubjectSelector({ subject, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2 p-4 bg-white border-b border-gray-200">
      {SUBJECTS.map((s) => (
        <button
          key={s}
          onClick={() => onSelect(s)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition
            ${subject === s
              ? 'bg-indigo-600 text-white'
              : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
            }`}
        >
          {s}
        </button>
      ))}
    </div>
  )
}