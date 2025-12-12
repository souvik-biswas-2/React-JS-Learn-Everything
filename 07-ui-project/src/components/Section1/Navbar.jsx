import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-18 py-8' >
        <h4 className='bg-black text-white uppercase rounded-full px-6 py-2'>Target Audience</h4>
        <button className='bg-gray-200 rounded-full uppercase px-6 py-2 tracking-wider text-sm'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar