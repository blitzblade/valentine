import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Love from './components/love.component'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Love />
    </>
  )
}

export default App
