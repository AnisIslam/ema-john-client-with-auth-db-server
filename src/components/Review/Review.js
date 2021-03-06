import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Reviewitem from '../Reviewitem/Reviewitem';
import Cart from '../Cart/Cart'; import happyImage from '../../images/giphy.gif'
import { useHistory } from 'react-router';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const history = useHistory();
    const handleProceedCheckout = () => {
        history.push('/shipment');
        // setCart([]);
        // setOrderPlaced(true);
        // processOrder();

    }
    

    const removeProduct = (productKey) => {
        // console.log('remove clicked', productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        //Cart
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

    let thankyou;
    if (orderPlaced) {
        thankyou = <img src={happyImage} alt='' />

    }
    return (
        <div className='twin-container'>
            <div className="product-container">
                {
                    cart.map(pd => <Reviewitem
                        key={pd.key}
                        removeProduct={removeProduct}
                        product={pd} > </Reviewitem>)
                }
                {
                    thankyou //set thankyou variable here
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handleProceedCheckout} className='main-button'> Proceed Checkout</button>
                </Cart>
            </div>

        </div>
    );
};

export default Review;