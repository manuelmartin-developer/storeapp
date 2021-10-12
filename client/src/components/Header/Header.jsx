import React, { useContext } from "react";
import { userContext } from "../../contexts/userContext";
import { adminContext } from "../../contexts/adminContext";
import { Link } from "react-router-dom";
import { BsMinecartLoaded } from "react-icons/bs";
import { useCart } from "react-use-cart";

const Header = () => {
  const { totalItems } = useCart();

  const { userLogged } = useContext(userContext);
  const { isAdmin } = useContext(adminContext);

  return (
    <header className="header">
      {userLogged && isAdmin ? (
        <>
          <div className="header-logo">
            <Link to="/">Hello world!</Link>
          </div>
          <div className="header-links">
            <Link to="/logout" className="header-links-link">
              <p className="text">
                root&gt;_ <strong>exit</strong>
              </p>
            </Link>
          </div>
        </>
      ) : userLogged && !isAdmin ? (
        <>
          <div className="header-logo">
            <Link to="/">Hello world!</Link>
            <Link to="/cart" className="header-cart-link">
              <BsMinecartLoaded />
              <span className="header-cart-quantity"> {totalItems} </span>
            </Link>
          </div>

          <div className="header-links">
            <Link to="/logout" className="header-links-link">
              <p className="text">
                user&gt;_ <strong>exit</strong>
              </p>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="header-logo">
            <Link to="/">Hello world!</Link>
          </div>
          <div className="header-links">
            <Link to="/login" className="header-links-link">
              <p className="text">
                guest&gt;_ <strong>login</strong>
              </p>
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
