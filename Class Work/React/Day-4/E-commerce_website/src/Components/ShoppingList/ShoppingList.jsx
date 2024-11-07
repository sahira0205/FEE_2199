import React from 'react'
import Products from '../Products/Products.jsx'
const ShoppingList = () => {

const products=[
    {
    name:"Burger",
    imgURL:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVyZ2VyfGVufDB8fDB8fHww" ,
    price: "599",
},
{
name:"Pizza",
imgURL:"https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emF8ZW58MHx8MHx8fDA%3D" ,
price: " 799",
},
{
    name:"Pasta",
    imgURL:"https://media.istockphoto.com/id/1306964172/photo/cauliflower-pasta.webp?a=1&b=1&s=612x612&w=0&k=20&c=IVuJ-qXWzSl2C-DFox8gdIWq19z-vQcatETAZP8Y6PA=" ,
    price: " 675",
    },
]

    return (
        <section>
            {products.map((product)=>{
                return (
                    <Products name={product.name} imgURL={product.imgURL} price={product.price}/>
                )
            })}
        </section>
      )
}

export default ShoppingList