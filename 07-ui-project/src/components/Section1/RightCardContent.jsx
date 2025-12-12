import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
        <h1 className='bg-white h-10 w-8 text-2xl font-semibold flex justify-center items-center rounded-full'>{props.count}</h1>
        <p className='text-lg mb-5 leading-normal text-white mt-80'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, commodi?</p>
        <div className='flex justify-between'>
            <button className='bg-blue-500 rounded-full text-white font-semibold px-8 py-3'>Audience</button>
            <button className='bg-emerald-500 rounded-full text-white font-semibold px-5 py-4'><ArrowRight /></button>
        </div>
    </div>
  )
}

export default RightCardContent