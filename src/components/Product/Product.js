import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { name, born, genre, recordLabels, demand,img } = props.product;

    return (
        <div className="product">
            <div>
                <img className='image' src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name"><span className='title'>Name</span> {name}</h4>
                <p><span className='title'>Born:</span> {born}</p>
                <p><span className='title'>Genre:</span> {genre}</p>
                <p><small><span className='title'>RerordLabels</span>{recordLabels}</small></p>
                <p><span className='title'>Price</span>: {demand}</p>
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="btn-regular"
                ><FontAwesomeIcon icon={faThumbsUp} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;