import React, { useContext } from "react";
import { cartContext } from "../../contexts/cartContext";
import { userContext } from "../../contexts/userContext";
import { adminContext } from "../../contexts/adminContext";
import { Link } from "react-router-dom";
import { BsMinecartLoaded } from "react-icons/bs";

const Header = () => {
  const { cart } = useContext(cartContext);
  const { userLogged } = useContext(userContext);
  const { isAdmin } = useContext(adminContext);

  if (userLogged && isAdmin) {
    return (
      <header className="header">
        <Link to="/" className="header-logo">
          <p>Hello world! Is admin</p>
        </Link>
        <div className="header-links">
          <Link to="/logout" className="header-links-link">
            <p>Logout</p>
          </Link>
        </div>
      </header>
    );
  }
  if (userLogged && !isAdmin) {
    return (
      <header className="header">
        <Link to="/" className="header-logo">
          <p>Hello world! Is user</p>
        </Link>
        <div className="header-links">
          <Link to="/logout" className="header-links-link">
            <p>Logout</p>
          </Link>
        </div>
        <div className="header-cart">
          <Link to="/cart" className="header-link">
            <BsMinecartLoaded />
            <span className="header-cart-quanty"> {cart.length} </span>
          </Link>
        </div>
      </header>
    );
  }
  if (!userLogged) {
    return (
      <header className="header">
        <Link to="/" className="header-logo">
          <p>Hello world!</p>
        </Link>
        <Link to="/login" className="header-link">
          <p>login</p>
        </Link>
      </header>
    );
  }
};

export default Header;
