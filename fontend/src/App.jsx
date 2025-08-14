import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import MainPage from './pages/main/mainPage'
import MissionPage from './pages/mission/missionpage'
import MyPage from './pages/mypage/mypage'
import Secretpage from './pages/secretstory/secretpage'

function App() {
  const baseWidth = 375
  const baseHeight = 812
  const [scale, setScale] = useState(1)

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden font-[pretendard]">
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
            <Link to="/mypage">My Page</Link>
            <Link to="/secret">Secret</Link>
          </nav>

          {/* 페이지 영역 */}
          <div className="flex-1 flex items-center justify-center">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/mission" element={<MissionPage />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/secret" element={<Secretpage />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  )
}

export default App
