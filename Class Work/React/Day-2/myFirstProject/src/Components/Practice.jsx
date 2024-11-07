import React from 'react'
import './Practice.css'

const Practice = ({name,age,crush}) => {
    return (
      <div className='practice'>
          <h1>Name:{name}</h1>
          <h2>Age:{age}</h2>
          <h3>Crush:{crush}</h3>
      </div>
    )
  }
export default Practice