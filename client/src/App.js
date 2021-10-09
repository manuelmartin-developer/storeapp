//  Imports
import '../src/styles/styles.scss';
import React, {useState} from 'react'
import { BrowserRouter } from 'react-router-dom';

import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Main from '../src/components/Main';

import { cartContext } from './contexts/cartContext'
import { productsContext } from './contexts/productsContext'

const App = () => {

  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const cartData = {
    cart: cart,  
    setCart: setCart, 
  };
  const productsData = {
    products: products,
    setProducts: setProducts
  }

  return (
    <BrowserRouter>
      <cartContext.Provider value={cartData}>
        <productsContext.Provider value={productsData}>
        <Header />
        <Main />
        <Footer />
      </productsContext.Provider>
      </cartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
