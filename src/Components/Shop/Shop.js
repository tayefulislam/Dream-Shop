import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';






const Shop = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch(`products.json`)

            .then(res => res.json())
            .then(data => setProducts(data))


    }, [])


    const [carts, setCarts] = useState([])



    const handleAddToCart = (product) => {

        const checkCart = carts.find(cart => cart.id === product.id);

        if (!checkCart) {

            if (carts.length < 4) {
                const newCart = [...carts, product];
                setCarts(newCart)
            }


            else {
                alert('Opps! You Can Add More then 4 In Shopping Cart')
            }



        }

    }


    // get random product
    const randomfield = document.getElementById('random-product');

    const randomProduct = () => {

        if (carts.length !== 0) {
            const randomNum = (max) => Math.floor(Math.random() * max)

            randomfield.innerText = carts[randomNum(carts.length)].name

        }

    }

    //clear cart

    const clearCart = () => {
        randomfield.innerText = '';
        setCarts([])
    }



    return (
        <div className='shop-container'>

            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={handleAddToCart}

                    ></Product>)
                }
            </div>



            <div className='cart-container'>


                < h1>Choose Product</h1>


                {
                    carts.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
                }

                <p id='random-product'></p>

                <button onClick={randomProduct}>Raddom One</button>
                <button onClick={() => clearCart()}>Clear</button>

            </div>



        </div>
    );
};

export default Shop;