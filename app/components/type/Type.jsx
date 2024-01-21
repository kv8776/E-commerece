import React from 'react'
import { Link } from 'react-router-dom'
import "./Type.css";
const Type = () => {
    return (
        <div className="container">

            <Link to="/electronics" className="click">Electronics</Link>


            <Link to="/fashion" className="click">Fashion</Link>


            <Link to="/grocery" className="click">Grocery</Link>

        </div>
    )
}

export default Type