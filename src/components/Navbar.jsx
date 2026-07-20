import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar({ darkMode, onToggleDarkMode }) {
  const navigate = useNavigate()

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-100 sticky top-0 z-10">
      <Link to="/" className="flex items-center gap-2">
        <span className="text-xl">🤖</span>
        <span style={{ fontFamily: 'Quicksand, sans-serif' }} className="font-semibold text-[#14213D]">
          Code<span className="text-[#FFC857] bg-[#14213D] px-1 rounded">Buddy</span>
        </span>
      </Link>

      <div className="flex items-center gap-1">
        <Link
          to="/"
          className="px-3 py-2 text-sm text-[#1B1B1F]/70 hover:text-[#14213D] hover:bg-gray-50 rounded-lg transition"
        >
          Home
        </Link>
        <button
          onClick={() => navigate('/subjects')}
          className="px-3 py-2 text-sm text-[#1B1B1F]/70 hover:text-[#14213D] hover:bg-gray-50 rounded-lg transition"
        >
          New Chat
        </button>
        <Link
          to="/about"
          className="px-3 py-2 text-sm text-[#1B1B1F]/70 hover:text-[#14213D] hover:bg-gray-50 rounded-lg transition"
        >
          About
        </Link>

        <button
          onClick={onToggleDarkMode}
          aria-label="Toggle dark mode"
          className="ml-2 w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-50 transition"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        <div className="ml-2 w-8 h-8 rounded-full bg-[#2EC4B6]/20 flex items-center justify-center text-sm">
          🧑
        </div>
      </div>
    </nav>
  )
}