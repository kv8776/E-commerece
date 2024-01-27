// Cart.js
import NoteContext from '@/app/NoteContext';
import React, { useContext, useState, useEffect } from 'react';
import "./cart.css";

const Cart = () => {
  const [price, setPrice] = useState(0);
  const { noteState, setNoteState, quantity, setquantity } = useContext(NoteContext);

  useEffect(() => {
    calculatePrice();
  }, [noteState, quantity]);

  const calculatePrice = () => {
    let totalPrice = 0;
    noteState.forEach((item) => {
      const itemQuantity = item.quantity || 1; 
      totalPrice += item.price * itemQuantity;
    });
    setPrice(totalPrice);
  };

  const clearcart = () => {
    setNoteState([]);
    setquantity([]);
    setPrice(0);
  };

  const quantitychange = (itemId, change) => {
    let updatedQuantity = [...quantity];
    updatedQuantity[itemId] = (updatedQuantity[itemId] || 0) + change; 
    setquantity(updatedQuantity);
  };

  console.log(quantity);
  console.log(noteState);

  return (
    <>
      <h2 className='cart-heading'>YOUR CART</h2>
      <div className='cart-container'>
        {noteState && noteState.length > 0 ? (
          <>
            <div className='cart-box'>
              {noteState.map((item) => (
                <div className='cart-card' key={item.id}>
                  <img src={item.productImage} alt="image not found" />
                  <div className="price-info">{item.productName} - ₹{item.price}</div>
                  <div className="counter-div">
                    <button className='counter' onClick={() => quantitychange(item.id, 1)}>+</button>
                    <h5>{quantity[item.id]}</h5>
                    <button className='counter' onClick={() => quantitychange(item.id, -1)}>-</button>
                  </div>
                </div>
              ))}
            </div>

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
