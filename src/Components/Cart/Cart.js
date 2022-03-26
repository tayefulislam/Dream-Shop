import React from 'react';


const Cart = ({ cart }) => {
    console.log(cart)




    return (

        <div>

            <div><h1>Choose Product</h1>

                {
                    cart.map(cart => <h3>{cart.name}</h3>)
                }

            </div>

        </div>








    );










};







export default Cart;