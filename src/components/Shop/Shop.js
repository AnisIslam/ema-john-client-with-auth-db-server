import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState([]);

    //Load data from server no fakedata now

    useEffect(() => {
        fetch(' https://anis-ema-john-ecommerce.herokuapp.com/products?search='+search)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [search])

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        fetch(' https://anis-ema-john-ecommerce.herokuapp.com/productsByKeys',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productKeys)
        })
        .then(res => res.json())
        .then(data => setCart(data));
    }, [])

    const handleSearch = event =>{
        setSearch(event.target.value);

    }

    const handleAddProduct = (product) => {
        const toBeAddedKey = product.key; //set product key
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey) //check duplicate product in cart
        let count = 1; //already in cart 1 product. so value is 1.
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;

            const others = cart.filter(pd => pd.key !== toBeAddedKey) // jeta add kortesi setha bade onno product gula nilam
            newCart = [...others, sameProduct];
        }

        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        // const count = sameProduct.length;
        // console.log('added', product);
        // const newCart = [...cart, product];
        setCart(newCart);


        addToDatabaseCart(product.key, count);
    }

    return (
        <div className='twin-container'>
            <div className="product-container">
                <input type="text" onBlur={handleSearch} placeholder="search product" className='product-search'/>
                {
                    products.map(pd => <Product
                        key={pd.key}
                        showAddToCart={true}
                        handleAddProduct={handleAddProduct}
                        product={pd}></Product>) //-----------------------call Product.js file here
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/review'>
                        <button className='main-button'>Review Order</button>
                    </Link>
                </Cart>
            </div>



        </div>
    );
};

export default Shop;