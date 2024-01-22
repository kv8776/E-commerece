
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaShopify } from 'react-icons/fa';

import './Navbar.css';

import { Link } from 'react-router-dom';
import Cart from '@/app/pages/cart/cart';



const Navbar = () => {
  return (
    <header className="flex-container">

      <div className="brand">
        <FaShopify size={36} className="brand-icon" />
        <span className="brand-text">GANESH<span className='inner-text'>.ECOM</span></span>
      </div>
      <div className="search">
        <label>
          <input type='text' placeholder='What can i find for you?' />
          <span className='inner-search'>Search</span>
        </label>
      </div>
           
      <Link to="cart" >  <AiOutlineShoppingCart size={36} className="brand-icon" /></Link>
    </header>
  );
}

export default Navbar;
