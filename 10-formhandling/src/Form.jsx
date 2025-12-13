import React from 'react'

const Form = () => {

    const SubmitHandler = (e) => {
        e.preventDefault()
        console.log("Form Submitted")
    }

  return (
    <div>
        <form onSubmit={(e) => {
            SubmitHandler(e)
        }}>
            <input type="text" placeholder='Enter Your Name'/>
            <button className='bg-emerald-500 rounded-full'>Submit</button>
        </form>
    </div>
  )
}

export default Form