import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setdata] = useState([])

  // fetch

  // const GetData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //   console.log(response);
  //   const data = await response.json();
  //   console.log(data);
  // }


  // axios jsonplaceholder

  const GetData = async () => {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    // console.log(response.data);

    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    setdata(data)
    // console.log(data)

  }

  return (
    <div>
      <button className='bg-emerald-500 px-6 py-2 m-5 rounded-full' onClick={GetData}>Get Data</button>
      <div>
        {data.map((elem, idx)=>{
          return <h3>{idx+1}. Hello, {elem.name}</h3>
        })}
      </div>
    </div>
  )
}

export default App