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
                alert('Opps! You Can Not Add More then 4 In Shopping Cart')
            }



        }

    }

    // get random product

    const [randomCart, setRandomCart] = useState([])





    const randomProduct = () => {

        const randomNum = () => Math.floor(Math.random() * carts.length);

        if (carts.length !== 0) {

            setRandomCart(carts[randomNum()]);

        }

    }



    // clear the cart

    const clearCart = () => {
        setRandomCart([])
        setCarts([])
    }




    // delete a item

    const deleteitem = (product) => {


        console.log(product)

        const newDeleteCart = carts.filter(cart => cart.id !== product.id);

        setCarts(newDeleteCart)


    }



    const { name, picture } = randomCart


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


                <div className='cart'>

                    <h2>Cart List</h2>

                    <div>
                        {
                            carts.map(cart => <Cart key={cart.id}
                                cart={cart}
                                deleteitem={deleteitem}
                            ></Cart>)
                        }
                    </div>

                    <div className='random-product'>
                        <img src={picture} alt="" />
                        <h3> {name}</h3>
                    </div>

                    <button id='surprise-btn' onClick={randomProduct}>Surprise Product</button>
                    <button id='clear-btn' onClick={clearCart}>Clear Cart</button>

                </div>
            </div>



        </div>
    );
};

export default Shop;