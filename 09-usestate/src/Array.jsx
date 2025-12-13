import React, { useState } from 'react'

const Array = () => {

    const [arr, setarr] = useState({user:"Souvik Biswas", age: 18});

    const btnClick = () =>{
        // first method
        // const newArr = {...arr}
        // newArr.user = "Souvik Biswas";
        // newArr.age = 22;
        // setarr(newArr)
        // second method
        setarr(prev => ({...prev,age:22}))
    }

    return (
    <div>
        <h1>{arr.user}, {arr.age}</h1>
        <button onClick={btnClick}>Click</button>
    </div>
  )
}

export default Array