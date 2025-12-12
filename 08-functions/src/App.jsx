import React from 'react'

const App = () => {
  return (
    <div>
      <input onChange={ (element) => {
        console.log(element.target.value)
      }} className='m-5 p-5' type="text" placeholder='Enter Name' />
    </div>
  )
}

export default App