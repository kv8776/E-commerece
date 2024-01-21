import React from 'react'
import "./Electronics.css"
import Product from '@/app/components/product/product'
import { PRODUCTS } from '@/app/assests/fashion-info.js'
const Electronics = () => {
  return (
    <div className="shop">
      

   
      {PRODUCTS.map((p) => (
        <Product data={p} />
      ))}
    
  </div>
  )
}

export default Electronics



