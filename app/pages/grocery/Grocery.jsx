import React from 'react'
import "./Grocery.css"
import Product from '@/app/components/product/product'
import { PRODUCTS } from '@/app/assests/grocery-info.js'
const Grocery = () => {
  return (
    <div className="shop">
      

   
    {PRODUCTS.map((p) => (
      <Product data={p} />
    ))}
  
</div>
  )
}

export default Grocery








