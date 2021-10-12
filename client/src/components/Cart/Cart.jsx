import React from "react";
import { useCart } from "react-use-cart";
import { useHistory } from "react-router-dom";
import { Toast } from "../../hooks/useToast";

const Cart = () => {

  const {
    cartTotal,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();
  const history = useHistory();


  const checkoutCart = () =>{
    if (cartTotal){

      history.push("/");
      emptyCart()
      Toast.fire({
        icon: "success",
        title: "Your order is in process!!!",
      });
    }
  }

  return (
    <section className="cart">
    <h1>Total Cart {cartTotal.toFixed(2)}$</h1>
    <table>
      <thead>
        <tr>
        <th>Image</th>
        <th>Title</th>
        <th>Price</th>
        <th>Quanty</th>
        <th>Subtotal</th>
        <th>Remove</th>
        </tr>
      </thead>
      <tbody>
      {items.map((item) => (
        <tr key={item.id}>
          <td><img src={item.image} alt={item.name} height="50px" /></td>
          <td>{item.title}</td>
          <td>{item.price}$</td>
          <td>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
              -
            </button>
              {item.quantity}
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            </td>
            <td>{item.itemTotal.toFixed(2)}$</td>
            <td><button onClick={() => removeItem(item.id)}>&times;</button></td>
        </tr>
        
      ))}
      </tbody>
    </table>

    <button onClick={() => {checkoutCart()}}>Checkout</button>
    </section>
  );
};

export default Cart;
