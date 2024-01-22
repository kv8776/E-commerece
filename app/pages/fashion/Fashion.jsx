import React from 'react'
import "./Fashion.css"
import Product from '@/app/components/product/product'
import { PRODUCTS } from '@/app/assests/fashion-info.js'
const Fashion = () => {
  return (
    <div className="shop">
      

   
      {PRODUCTS.map((p) => (
        <Product data={p} />
      ))}
    
  </div>
  )
}

export default Fashion








