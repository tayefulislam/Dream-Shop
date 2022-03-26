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

    //clear cart

    const clearCart = () => {

        const randomfield = document.getElementById('random-product');
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



                <Cart key={carts.id} cart={carts} clearCart={clearCart}></Cart>



            </div>



        </div>
    );
};

export default Shop;