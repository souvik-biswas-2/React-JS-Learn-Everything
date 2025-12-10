import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card image="../public/profile-pic.jpg" user="User 1" description="User 1 description" />
      <Card image="../public/profile-pic.jpg" user="User 2" description="User 2 description" />
      <Card image="../public/profile-pic.jpg" user="User 3" description="User 3 description" />
    </div>
  )
}

export default App