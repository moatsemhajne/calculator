import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CCCalc from './ClassComps/CCCalc'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <CCCalc/>
     </div>
    </>
  )
}

export default App
