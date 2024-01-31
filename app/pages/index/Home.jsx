import React from 'react'

import "./Home.css"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="main-container">
      <div className="text">
        Summer sale get 50% off 
       Be first one to cliam
       <div className="shop-button">
      <Link to="/fashion" ><button className='button' >Shop</button></Link>
       </div>
       </div>
     <img  className="image" src="index.png"/>
    </div>
  )
}

export default Home