import React from 'react'

const App = () => {

  // localStorage.setItem('user', 'Souvik Biswas')
  // localStorage.setItem('age','18')

  // const user = localStorage.getItem('user');
  // const age = localStorage.getItem('age')
  // console.log(user, age);
  
  // localStorage.removeItem('age')
  // localStorage.clear()

  // const user = {
  //   username: "Souvik Biswas",
  //   age: 18,
  //   city: "Chanderghat"
  // }

  // localStorage.setItem('user',JSON.stringify(user));

  const User = localStorage.getItem('user')

  console.log(typeof(User));

  const user1 = JSON.parse(localStorage.getItem('user'))

  console.log(typeof(user1));
  console.log(user1);
  
  
  


  return (
    <div>

    </div>
  )
}

export default App