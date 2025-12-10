import React from 'react'

const Card = (props) => {
  return (
        <div className='card'>
            <img src={props.image} alt="profile pic" />
            <h1>{props.user}</h1>
            <p>{props.description}</p>
            <button>View Profile</button>
        </div>
  )
}

export default Card