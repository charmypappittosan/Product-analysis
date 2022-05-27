import React from 'react';
import { Card } from 'react-bootstrap';
import './Cart.css'
const Cart = (props) => {
    const {name,feedback}=props.review;
    return (
      <div className="container">
        <h1>{name}</h1>
        <p>{feedback}</p>
        </div>
    );
};

export default Cart;