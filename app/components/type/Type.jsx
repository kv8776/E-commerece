import React from 'react'
import { Link } from 'react-router-dom'
import "./Type.css";
const Type = () => {
    return (
        <div className="container">
           
 
            <Link to="/electronics" className="click">ELECTRONICS</Link>


            <Link to="/fashion" className="click">FASHION</Link>

            <Link to="/grocery" className="click">GROCERY</Link>
            <Link to="/grocery" className="click">SPORTS WEAR</Link>
            <Link to="/grocery" className="click">NEW RELEASES</Link>
            <Link to="/grocery" className="click">SUBSCRIPTION</Link>            
        </div>
    )
}

export default Type