
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaShopify } from 'react-icons/fa';

import './Navbar.css';



const Navbar = () => {
  return (
    <header className="flex-container">
      
        <div className="brand">
          <FaShopify size={34}className="brand-icon" />
          <span className="brand-text">Ganesh</span>
        </div>
       <AiOutlineShoppingCart size={34}className="brand-icon" />
    </header>
  );
}

export default Navbar;
