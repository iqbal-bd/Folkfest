import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    // const totalReducer = (previous, product) => previous + product.price;
    // const total = cart.reduce(totalReducer, 0);
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.demand * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    return (
        <div>
            <h3>Singer's List</h3>
            <h5>singer details: {totalQuantity}</h5>
            <br />
            <p>Total: {total.toFixed(2)}</p>
            <button
                className="btn-regular"
                ><FontAwesomeIcon icon={faCrown} /></button>
            
            <ul>
                {
                    cart.map(product=> <li key={product.key}><span className='product-name'>Singer Name:</span> {product.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;