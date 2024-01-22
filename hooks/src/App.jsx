import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseState from './conponents/UseState'
import Context from './conponents/Context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Context>
        < UseState />
      </Context>
    </>
  )
}

export default App
