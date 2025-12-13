import React, { useContext } from 'react'
import Navbar2 from './Navbar2'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {
  const [theme] = useContext(ThemeDataContext)

  return (
    <div className={`flex justify-between px-6 py-5 ${theme}`}>
      <h1 className='font-bold text-3xl'>Souvik Biswas</h1>
      <Navbar2 />
    </div>
  )
}

export default Navbar
