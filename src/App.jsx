import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import SubjectsPage from './pages/SubjectsPage'
import ChatPage from './pages/ChatPage'
import AboutPage from './pages/AboutPage'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <BrowserRouter>
        <Navbar darkMode={darkMode} onToggleDarkMode={() => setDarkMode((d) => !d)} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/subjects" element={<SubjectsPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App