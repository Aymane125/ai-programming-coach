export default function UnderstandingCheck({ onYes, onExplainDifferently, disabled }) {
  return (
    <div className="flex items-center gap-2 mb-4 ml-1">
      <span className="text-xs text-gray-500 mr-1">Do you understand this explanation?</span>
      <button
        onClick={onYes}
        disabled={disabled}
        className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700 hover:bg-green-200 disabled:opacity-40"
      >
        Yes
      </button>
      <button
        onClick={onExplainDifferently}
        disabled={disabled}
        className="px-3 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200 disabled:opacity-40"
      >
        Explain differently
      </button>
    </div>
  )
}