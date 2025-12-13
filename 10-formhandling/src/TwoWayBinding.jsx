import React, { useState } from 'react'

const TwoWayBinding = () => {

    const [Name, seTName] = useState('')

    const SubmitHandler = (e) => {
        e.preventDefault()
        console.log("Form Submitted by", Name)
        seTName("")
    }

  return (
    <div>
        <form onSubmit={(e) => {
            SubmitHandler(e)
        }}>
            <input onChange={ (event) => {
                seTName(event.target.value)
            }} type="text"
            value={Name}
            placeholder='Enter Your Name'/>

            <button className='bg-emerald-500 rounded-full'>Submit</button>
        </form>
    </div>
  )
}

export default TwoWayBinding