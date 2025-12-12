import React from 'react'
import RightCard from './RightCard'

const RightContent = () => {
  return (
    <div className='h-full p-6 w-2/3 flex gap-5 flex-row'>
      <RightCard img='../../../public/img1.jpg' count={1} />
      <RightCard img='../../../public/img2.jpg' count={2} />
      <RightCard img='../../../public/img3.jpg' count={3} />
    </div>
  )
}

export default RightContent