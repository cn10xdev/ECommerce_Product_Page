import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import './styles.css';
import { ToggleTheme } from './components/NavbarToggle';
import {styled, createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.colorProp? 'black': 'rgb(169, 218, 243)'};
    color: ${(props) => props.colorProp? 'white': 'black'};
  }`;



function App() {
    const [cart, setCart] = useState([]);
    const [theme, setTheme] = useState({
        toggleState : false,
        theme : "Light",
        themeButtonDisplay : "Dark Mode",
        color: "red"
    })

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

    const toggleValue = localStorage.getItem('toggleValue');

    const addToCart = (product) => {
        let updatedCart = [...cart];
        const productIndex = updatedCart.findIndex(item => item.id === product.id);

        if (productIndex !== -1) {
            updatedCart[productIndex].quantity += 1;
        } else {
            updatedCart.push(product);
        }

        setCart(updatedCart);
    };

    const updateQuantity = (productId, quantity) => {
        let updatedCart = [...cart];
        const productIndex = updatedCart.findIndex(item => item.id === productId);

        if (productIndex !== -1 && quantity > 0) {
            updatedCart[productIndex].quantity = quantity;
            setCart(updatedCart);
        }
    };

    const toggleThemeFunc = () =>{
        let updatedTheme = {...theme};
        console.log(theme.toggleState)
        updatedTheme.toggleState = !(updatedTheme.toggleState);
        
        //console.log(themeDetails.toggleState)

        if(updatedTheme.toggleState == false){
            updatedTheme.themeButtonDisplay = "Dark Mode";
            updatedTheme.theme = "Light";
            updatedTheme.color = "white"
            localStorage.setItem('toggleValue',0)
        }else{
            updatedTheme.themeButtonDisplay = "Light Mode";
            updatedTheme.theme = "Dark";
            updatedTheme.color = "black";
            localStorage.setItem('toggleValue',1)
        }
        //
        console.log(localStorage.getItem('toggleValue'))
        setTheme(updatedTheme);
        
        //console.log(theme.toggleState)
    }

    
    console.log(theme.toggleState)
    return (
        <>
        <GlobalStyle colorProp={ parseInt(toggleValue) }/>
        <div className="App" colorProp={ parseInt(toggleValue) }>
            <ToggleTheme data={parseInt(toggleValue)} 
                toggleThemeFunc ={toggleThemeFunc}
                
                 />
            <h1>Product Page</h1>
            <div className="products">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
            <Cart cart={cart} updateQuantity={updateQuantity} />
        </div>
        </>
    );
}

export default App;
