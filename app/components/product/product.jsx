
import React, { useContext } from 'react';
import "./product.css";
import NoteContext from '@/app/NoteContext';

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { setNoteState, noteState } = useContext(NoteContext);

  const addtocart = () => {
    const existingProductIndex = noteState.findIndex(product => product.id === id);

    if (existingProductIndex !== -1) {
     
      const updatedCart = noteState.map((item, index) => {
        if (index === existingProductIndex) {
          return { ...item, quantity: (item.quantity || 0) + 1 }; 
        }
        return item;
      });

      setNoteState(updatedCart);
    } else {
      
      setNoteState([...noteState, { ...props.data, quantity: 1 }]);
    }
  };

  return (
    <div className="card">
         <img src={productImage} alt="image not found" />
      <div className="description">
        <p><b>{productName}</b></p>
        <p><b> ₹{price}</b></p>
      </div>
      <button onClick={addtocart} className='but'>Add to Cart</button>
    </div>
  );
};

export default Product;
