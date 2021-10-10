//  Imports
import '../src/styles/styles.scss';
import React, {
  useState,
  useEffect
} from 'react'
import {
  BrowserRouter, Route
} from 'react-router-dom';
import jwt_decode from "jwt-decode";

import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Main from '../src/components/Main';

import {
  cartContext
} from './contexts/cartContext'
import {
  productsContext
} from './contexts/productsContext'
import {
  userContext
} from './contexts/userContext'
import {
  adminContext
} from './contexts/adminContext'
import { QueryParamProvider } from 'use-query-params';

const App = () => {

  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [userLogged, setUserLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);


  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      setUserLogged(true);
      const decode = jwt_decode(token);
      if (decode.role === "admin") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    }
  }, []);

  const cartData = {
    cart: cart,
    setCart: setCart,
  };
  const productsData = {
    products: products,
    setProducts: setProducts
  }
  const userData = {
    userLogged: userLogged,
    setUserLogged: setUserLogged
  }
  const adminData = {
    isAdmin: isAdmin,
    setIsAdmin: setIsAdmin
  }

  return (
    <BrowserRouter>
      <userContext.Provider value={userData}>
      <adminContext.Provider value={adminData}>
      <cartContext.Provider value={cartData}>
      <productsContext.Provider value={productsData}>
        <Header />
        <QueryParamProvider ReactRouterRoute={Route}>
          <Main />
        </QueryParamProvider>
        <Footer />
      </productsContext.Provider>
      </cartContext.Provider>
      </adminContext.Provider>
      </userContext.Provider>
    </BrowserRouter>
  );
}

export default App;