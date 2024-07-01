import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BoardCard from './Components/Dashboard/BoardCard/BoardCardMain/BoardCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BoardCard/>

      
    </>
  )
}

export default App
