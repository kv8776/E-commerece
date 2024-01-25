import React from 'react'
import { Link } from 'react-router-dom'
import "./Type.css";
const Type = () => {
    return (
        <div className="container">
           <div className="inner">
 
            <Link to="/electronics" className="click">Electronics</Link>


            <Link to="/fashion" className="click">Fashion</Link>

            <Link to="/grocery" className="click">Grocery</Link>
            <Link to="/grocery" className="click">Sports Wear</Link>
            </div>   
        </div>
    )
}

export default Type