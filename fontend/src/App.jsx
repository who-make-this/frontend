import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import MainPage from './pages/main/mainPage'
import MissionPage from './pages/mission/missionpage'

function App() {
  const baseWidth = 375
  const baseHeight = 812
  const [scale, setScale] = useState(1)

  // 화면 크기 변경 시 scale 값 업데이트
  useEffect(() => {
    const handleResize = () => {
      const scaleX = window.innerWidth / baseWidth
      const scaleY = window.innerHeight / baseHeight
      setScale(Math.min(scaleX, scaleY))
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden font-[pretendard] font-thin">
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          width: `${baseWidth}px`,
          height: `${baseHeight}px`,
        }}
        className="bg-white shadow-sm flex flex-col"
      >
        <Router>
          {/* 상단 네비게이션 */}
          <nav className="p-2 bg-gray-200 flex justify-around">
            <Link to="/">Main</Link>
            <Link to="/mission">Mission</Link>
          </nav>

          {/* 페이지 영역 */}
          <div className="flex-1 flex items-center justify-center">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/mission" element={<MissionPage />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  )
}

export default App
