import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'

const App = () => {

  const [Theme, setTheme] = useState('light')

  return (
    <div>
      <h1>Theme is {Theme}</h1>
      <Navbar theme={Theme} setTheme={setTheme} />
    </div>
  )
}

export default App