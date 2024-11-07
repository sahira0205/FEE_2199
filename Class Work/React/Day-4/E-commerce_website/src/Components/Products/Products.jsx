import React from 'react'
import { useState } from 'react'
import './Products.css'
const Products = (props) => {
    let [price, setPrice] = useState(props.price);
    let change = () => {
        setPrice(10); 
    };
  return (
    <figure className='product' onClick={change}>
        <img src={props.imgURL} alt={props.name} />
        <h2>{props.name}</h2>
        <h2>Rs.{price}</h2>
    </figure>
  )
}

export default Products