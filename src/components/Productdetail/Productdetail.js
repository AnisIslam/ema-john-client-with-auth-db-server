import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const Productdetail = () => {
    const { productKey } = useParams(); //producktkey is product unique id
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(' https://anis-ema-john-ecommerce.herokuapp.com/products/'+productKey)
        .then(res => res.json())
        .then(data => setProduct(data));

    }, [productKey])

    // console.log(product);

    return (
        <div>
            <h1>{productKey} Product detail</h1>
            <Product showAddToCart={false} product={product}></Product>

        </div>
    );
};

export default Productdetail;