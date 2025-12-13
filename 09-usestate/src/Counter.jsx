import React, { useState } from 'react'

const Counter = () => {
    const [num, setNum] = useState(0)

    const Increase = () => {
        setNum(num+1)
    }

    const Decrease = () => {
        setNum(num-1)
    }

  return (
    <div>
        <h1>{num}</h1>
        <button onClick={Increase}>Increase</button>
        <button onClick={Decrease}>Decrease</button>
    </div>
  )
}

export default Counter