import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'


const Cart = ({ cart }) => {


    console.log(cart)




    return (

        <div className='cart-list'>
            {/* Product in Cart / Carts List */}

            <img src={cart.picture} alt="" />

            <h4>{cart.name}</h4>

            <FontAwesomeIcon icon={faMinusCircle}></FontAwesomeIcon>


        </div>


    );


};







export default Cart;