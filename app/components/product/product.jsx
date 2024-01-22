import React from 'react'
import "./product.css"
const Product = (props) => {
   const {id, productName,price,productImage}= props.data;
  return (
    <div className="card">
      <img src={productImage} alt="image not found"/>
      <div className="description">
        <p><b>{productName}</b>
        </p>
        <p><b> ₹{price}</b>
        </p>
       
        
      </div>
      <button className='but'>Add to cart</button>
    </div>
  )
}

export default Product


