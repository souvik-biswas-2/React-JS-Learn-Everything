import React, { useState } from 'react'

const BatchUpdate = () => {

    const [num, setNum] = useState(0)

    const btnClick = () => {
        setNum(prev => (prev+1))
        setNum(prev => (prev+1))
        setNum(prev => (prev+1))
        setNum(prev => (prev+1))
        setNum(prev => (prev+1))
    }


  return (
    <div>
        <h1>{num}</h1>
        <button onClick={btnClick}>Click</button>
    </div>
  )
}

export default BatchUpdate