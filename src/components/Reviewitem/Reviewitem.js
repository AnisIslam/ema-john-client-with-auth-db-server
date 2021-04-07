import React from 'react';

const Reviewitem = (props) => {

    const {name, quantity, key, price} = props.product;

    const reviewItemStyle= {
        borderBottom : '1px solid lightgray',
        marginBottom : '5px',
        paddingBotton:'5px',
        marginLeft : '200px',
        width : '700px'

    }
    return (
        <div style = {reviewItemStyle} className='review-item'>
            <h4 className='product-name'>{name}</h4>
            <p>Quantity : {quantity}</p>
            <p>Price : {price}</p>
            <br/>
            <button 
            className='main-button'
            onClick = {() => props.removeProduct(key)}
            >Remove </button>
            
        </div>
    );
};

export default Reviewitem;