import React from 'react'
import { ArrowUpRight } from'lucide-react'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex justify-between flex-col '>
        <div className='p-6'>
            <h3 className='text-6xl leading-[1.1] mb-7 font-bold'>Prospective<br/><span className='text-gray-600'>Customer</span><br/> Segmentation</h3>
            <p className='text-xl font-medium text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias fuga error quia quibusdam officia eveniet.</p>
        </div>
        <div className='text-10xl'><ArrowUpRight size={50} strokeWidth={2} /></div>
    </div>
  )
}

export default LeftContent