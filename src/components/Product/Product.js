import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props);
    const { key, img, name, seller, price, stock } = props.product; //object destructuring
    return (
        <div className='product'>
            <div className="picture">
                <img src={img} alt="" />
            </div>

            <div className='product-name'>
                <h4><Link to = {'/product/' + key}>{name}</Link></h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
               { //props.showAddToCart && used here for testing if showAddToCart is true then button is  shown
               props.showAddToCart === true && <button
                    className='main-button'
                    onClick = {() => props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                    </button>
                    }


            </div>
        </div>
    );
};

export default Product;