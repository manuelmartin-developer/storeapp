import React, { useContext } from "react";
import { cartContext } from "../../contexts/cartContext";


const Cart = () => {

  const { cart, setCart } = useContext(cartContext);

  const paintTableProducts = () => {
    return cart.map((product, index) => (
      <tr key={index}>
        <td>
          <img src={product.image} alt={product.title} height="70px" />
        </td>
        <td>{product.title}</td>
      </tr>
    ));
  };
  return (
    <table>
      <tbody>
        {paintTableProducts()}
      </tbody>
    </table>
  );
};

export default Cart;
