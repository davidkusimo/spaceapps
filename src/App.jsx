import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Flood Project</h1>
      </div>
      <div className="card">
        <p>
          Welcome to our website!
        </p>
      </div>
    </>
  )
}

export default App
