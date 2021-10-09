//  Imports
import '../src/styles/styles.scss';
import React, {useState} from 'react'
import { BrowserRouter } from 'react-router-dom';

import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Main from '../src/components/Main';

import { productsContext } from './contexts/productsContext'

const App = () => {

  const [products, setProducts] = useState([]);

  const utils = {
    products: products,
    setProducts: setProducts
  };

  return (
    <BrowserRouter>
      <productsContext.Provider value={utils}>
        <Header />
        <Main />
        <Footer />
      </productsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
