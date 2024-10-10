import { useState } from 'react'
import appallLogo from './assets/logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="#" >
          <img src={appallLogo} className="logo" alt="AppAll logo" />
        </a>
      </div>
      <p className="read-the-docs">
       Coming soon ...
      </p>
    </>
  )
}

export default App
