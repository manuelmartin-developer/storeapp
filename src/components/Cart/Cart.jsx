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
    <h1 className="cart-resume">Total Cart {cartTotal.toFixed(2)}$</h1>
    <table className="cart-table">
      <thead className="cart-table-thead">
        <tr className="cart-table-thead-tr">
        <th className="cart-table-thead-tr-th">Image</th>
        <th className="cart-table-thead-tr-th">Price</th>
        <th className="cart-table-thead-tr-th">Quanty</th>
        <th className="cart-table-thead-tr-th">Subtotal</th>
        <th className="cart-table-thead-tr-th">Remove</th>
        </tr>
      </thead>
      <tbody className="cart-table-tbody">
      {items.map((item) => (
        <tr className="cart-table-tbody-tr" key={item.id}>
          <td className="cart-table-tbody-tr-td"><img src={item.image} alt={item.name} height="50px" /></td>
          <td className="cart-table-tbody-tr-td">{item.price}$</td>
          <td className="cart-table-tbody-tr-td">
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
            <td className="cart-table-tbody-tr-td">{item.itemTotal.toFixed(2)}$</td>
            <td className="cart-table-tbody-tr-td"><button onClick={() => removeItem(item.id)}>&times;</button></td>
        </tr>
        
      ))}
      </tbody>
    </table>

    <button onClick={() => {checkoutCart()}}>Checkout</button>
    </section>
  );
};

export default Cart;
