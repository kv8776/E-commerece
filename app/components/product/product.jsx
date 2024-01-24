import React, { useContext } from 'react';
import "./product.css";
import NoteContext from '@/app/NoteContext';


const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  const { setNoteState, noteState } = useContext(NoteContext);

  const addtocart = () => {
    setNoteState([...noteState, props.data]);
  };

  return (
    <div className="card">
      <img src={productImage} alt="image not found" />
      <div className="description">
        <p><b>{productName}</b></p>
        <p><b> ₹{price}</b></p>
      </div>
      <button onClick={addtocart} className='but'>Add to cart</button>
    </div>
  );
};

export default Product;
