import NoteContext from '@/app/NoteContext';
import React, { useContext, useState, useEffect } from 'react';
import "./cart.css"

const Cart = () => {
  const [price, setPrice] = useState(0);
  const { noteState, setNoteState } = useContext(NoteContext);

  useEffect(() => {
    calculatePrice();
  }, [noteState]);

  const calculatePrice = () => {
    let totalPrice = 0;
    noteState.forEach((item) => {
      totalPrice += item.price;
    });
    setPrice(totalPrice);
  };

  const clearcart = () => {
    setNoteState([]);
    setPrice(0);
  };

  return (
    <>
      <h2 className='cart-heading'>YOUR CART</h2>
      <div className='cart-container'>
        {noteState && noteState.length > 0 ? (
          <>
            <ul>
              {noteState.map((item) => (
                <li className='cart-card' >
                  <img src={item.productImage} alt="image not found" />
                  <div className="price-info">{item.productName} - ₹{item.price}</div>
                  <div className="counter-div">
                  <button className='counter'>+</button>
                  <h5> 12 </h5>
                  <button className='counter'>-</button>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="price-remove">
              
            
              <div className='cart-price'>
                Total Price is: ₹{price}
              </div>
              <div className='clear-button'>
                <button onClick={clearcart}>clear cart</button>
              </div>
            </div>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </>
  );
};

export default Cart;
