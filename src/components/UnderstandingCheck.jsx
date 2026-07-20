export default function UnderstandingCheck({ onYes, onExplainDifferently, disabled }) {
  return (
    <div className="flex items-center gap-2 mb-5 ml-10">
      <span className="text-xs text-[#1B1B1F]/50 mr-1">Did that make sense?</span>
      <button
        onClick={onYes}
        disabled={disabled}
        className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-full
                   bg-[#2EC4B6]/10 text-[#0E8C81] hover:bg-[#2EC4B6]/20
                   disabled:opacity-30 disabled:cursor-not-allowed transition"
      >
        👍 Yes
      </button>
      <button
        onClick={onExplainDifferently}
        disabled={disabled}
        className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-full
                   bg-[#FFC857]/20 text-[#8A6400] hover:bg-[#FFC857]/30
                   disabled:opacity-30 disabled:cursor-not-allowed transition"
      >
        🔄 Explain differently
      </button>
    </div>
  )
}