import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar2 = () => {
    const [Theme, setTheme] = useContext(ThemeDataContext)
  return (
    <div className='flex gap-6 px-6 py-2'>
        <h4 className='font-semibold text-xl'>Home</h4>
        <h4 className='font-semibold text-xl'>About</h4>
        <h4 className='font-semibold text-xl'>Contact</h4>
        <h4 className='font-semibold text-xl'>Products</h4>
        <h4 className='font-semibold text-xl'>{Theme}</h4>
    </div>
  )
}

export default Navbar2