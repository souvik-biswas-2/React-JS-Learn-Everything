import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-between align-center'>
            <h2>Souvik Biswas</h2>
            <div className='flex p-2 gap-5'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar