import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';


const Product = ({ product, addToCart }) => {
    // console.log(product)

    const { name, picture, price } = product
    return (
        <div className='product'>

            <div className='product-info'>
                <img src={picture} alt="" />
                <div>

                    <h3>{name}</h3>
                    <h4> Price :${price}</h4>


                    <button onClick={() => addToCart(product)} className='cart-btn'><span>Add To Cart </span>
                        <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                    </button>
                </div>

            </div>

        </div>
    );
};

export default Product;