import React from 'react'

const Navbar = (props) => {
    const ChangeTheme = () => {
        props.setTheme('Dark')
    }
  return (
    

    <div>
        <button
        onClick={ChangeTheme}
        className='m-5 bg-emerald-500 rounded-xl px-6 py-2'>Change Theme</button>
    </div>
  )
}

export default Navbar