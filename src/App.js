import React from 'react';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartActionCreator } from './redux/actions/actions';

function App() {

    const dispatch = useDispatch();
    const cart = useSelector(state=>state.cart)

    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: 50,
            image: 'https://via.placeholder.com/150',
            quantity: 1,
        },
        {
            id: 2,
            name: 'Product 2',
            price: 100,
            image: 'https://via.placeholder.com/150',
            quantity: 1,
        }
    ];

    function addToCart(product){
        dispatch(addToCartActionCreator(product))
    }

    // function addToCart(){
    //     dispatch(addToCartActionCreator(cart))
    // }


    return (
        <>
        <div className="App">
            <h1>Product Page</h1>
            <div className="products">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />

                ))}
            </div>
            <Cart cart={cart}/>
        </div>
        </>
        
    );
}

export default App;
