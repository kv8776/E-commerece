import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaShopify } from 'react-icons/fa';

import './Navbar.css';

import { Link } from 'react-router-dom';
import Cart from '@/app/pages/cart/cart';
import NoteContext from '@/app/NoteContext';

const Navbar = () => {
  const { noteState } = useContext(NoteContext);

  return (
    <header className="flex-container">
      <div className="brand">
        <FaShopify size={36} className="brand-icon" />
        <span className="brand-text">
          GANESH<span className='inner-text'>.ECOM</span>
        </span>
      </div>
      <div className="search">
        <label>
          <input type='text' placeholder='What can I find for you?' />
          <span className='inner-search'>Search</span>
        </label>
      </div>
      <Link to="cart" className="cart-link">
        <AiOutlineShoppingCart size={36} className="brand-icon" />
        {noteState.length > 0 && (
          <div className="cart-count">{noteState.length}</div>
        )}
      </Link>
    </header>
  );
};

export default Navbar;
