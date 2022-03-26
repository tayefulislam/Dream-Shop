import React from 'react';


const Cart = ({ cart, clearCart }) => {


    // get random product

    const randomProduct = () => {
        const randomNum = (max) => Math.floor(Math.random() * max)
        const randomfield = document.getElementById('random-product');
        randomfield.innerText = cart[randomNum(cart.length)].name

    }





    return (

        <div>

            <div><h1>Choose Product</h1>

                {
                    cart.map(cart => <h3>{cart.name}</h3>)
                }

                <p id='random-product'></p>

                <button onClick={randomProduct}>Raddom One</button>
                <button onClick={() => clearCart()}>Clear</button>



            </div>

        </div>








    );










};







export default Cart;