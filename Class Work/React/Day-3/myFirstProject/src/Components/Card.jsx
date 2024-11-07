import React from 'react'
import "../Components/Card.css"
const Card = () => {
  return (
    <>
    <div className='main_container'>
      <div className='main-div'>
        <div className='image'>

        <img src="https://i.pinimg.com/564x/71/43/07/714307cc4c529ef62d8d8a36fa49cf69.jpg" alt="" />
        </div>
        <div className='content'>
          <p>Letter Graphic Thermal Lined Sweatshirt</p>
          <p>₹1999</p>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
    </>

  )
}

export default Card