import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaShopify } from 'react-icons/fa';

import './Navbar.css';

import { Link } from 'react-router-dom';
import Cart from '@/app/pages/cart/cart';
import NoteContext from '@/app/NoteContext';

import Type from '../type/Type';
import Home from '@/app/pages/index/Home';

const Navbar = () => {
  const { noteState } = useContext(NoteContext);

  return (
    <header className="flex-container">
      <div className="brand">

        <span className="brand-text">
          GanesH<span className='inner-text'>.ecoM</span>
        </span>
      </div>
      <div className="items">
        <Link to="/Home" className="c">Home</Link>


        <Link to="/type" className="c">Shop</Link>

        <Link to="/grocery" className="c">New</Link>
        <Link to="/grocery" className="c">Contact</Link>

      </div>
      <div className="cart-search">
      <div className="search">
        <label>
          <input type='text' placeholder='What can I find for you?' />
          <span className='inner-search'>Search</span>
        </label>
        </div>
        <Link to="cart" className="cart-link">
          <AiOutlineShoppingCart size={36} className="brand-icon" />
        </Link>
        </div>
    </header>
  );
};

export default Navbar;
