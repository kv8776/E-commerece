import React, { useContext } from 'react';
import "./product.css";
import NoteContext from '@/app/NoteContext';

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { setNoteState, noteState } = useContext(NoteContext);

  const addtocart = (i) => {
    let a;
    noteState.forEach(element => {
      if (element.id === i) {
        a = true;
      }
    });

    if (a === true) {
      noteState.forEach(element => {
        if (element.id === i) {
          element.quantity = element.quantity + 1;
          console.log(element.quantity)
        }
      });
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
      <button onClick={() => addtocart(id)} className='but'>Add to Cart</button>
    </div>
  );
};

export default Product;
