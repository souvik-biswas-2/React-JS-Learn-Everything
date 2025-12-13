import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const Mounting = () => {

    const [num, setNum] = useState(0)

    useEffect(() => {
        console.log('Use Effect is running....');
    },[])
    

  return (
    <div className='flex flex-row'>
      <h1 className='bg-emerald-500 rounded-full m-5 px-2 py-2 inline'>{num}</h1>
      <button onClick={() => {
        setNum(num+1)
      }} className='bg-emerald-500 rounded-full m-5 px-6 py-2' >Click</button>
    </div>
  )
}

export default Mounting