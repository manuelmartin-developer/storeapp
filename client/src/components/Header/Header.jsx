import React, { useContext } from "react";
import { cartContext } from "../../contexts/cartContext";
import { Link } from "react-router-dom";
import { BsMinecartLoaded } from 'react-icons/bs';

const Header = () => {

  const { cart } = useContext( cartContext );

  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <p>Hello world!</p>
      </Link>
      <Link to="/login" className="header-link">
        <p>login</p>
      </Link>
      <div className="header-cart"><Link to="/cart" className="header-link"><BsMinecartLoaded/> <span className="header-cart-quanty"> {cart.length} </span></Link></div>
    </header>
  );
};

export default Header;
