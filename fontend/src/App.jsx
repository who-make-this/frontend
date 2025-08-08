import { useState } from 'react'
import './App.css'
import MainPage from './component/mainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[375px] h-[812px] bg-white shadow-sm relative flex items-center justify-center">
        <MainPage className="flex flex-col items-center justify-center"/>
      </div>
    </div>
  )
}

export default App
