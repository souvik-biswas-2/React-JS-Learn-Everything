import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const Mounting = () => {

    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(100)

    useEffect(() => {
        console.log('Use Effect is running....');
    },[num2])
    

  return (
    <div className='flex flex-row'>
      <h1 className='bg-emerald-500 rounded-full m-5 px-2 py-2 inline'>num is {num}</h1>
      <h1 className='bg-emerald-500 rounded-full m-5 px-2 py-2 inline'>num2 is {num2}</h1>
      <button onClick={() => {
        setNum(num+1)
      }}
      onDoubleClick={() => {
        setNum2(num2+10)
      }}
      className='bg-emerald-500 rounded-full m-5 px-6 py-2' >Click</button>
    </div>
  )
}

export default Mounting