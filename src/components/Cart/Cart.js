import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    // const total = cart.reduce((total, prd)=> total + prd.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        console.log(product.price,product.quantity);

        total = total + product.price * product.quantity || 1;
        

    }

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);

    }

    let tax = Math.round(total / 10);
    tax = formatNumber(tax);
    total = formatNumber(total);
    shipping = formatNumber(shipping);

    const grandTotal = (total + shipping + tax);



    return (
        <div>
            <h4>Order Summary:  </h4>
            <p>Items Ordered: {cart.length} </p>
            <p>Product Price: {total} </p>

            <p><small>Shipping Cost: {shipping}</small> </p>
            <p><small>Tax + VAT: {tax}</small> </p>
            <p>Total Price: {grandTotal} </p>
            <br />
            {
                props.children //call children prop of Cart component. that was button
                
            }

           

        </div>
    );
};

export default Cart;