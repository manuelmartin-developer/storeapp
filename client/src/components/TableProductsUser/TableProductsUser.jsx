import React, { useContext } from "react";
import { productsContext } from "../../contexts/productsContext";
import { cartContext } from "../../contexts/cartContext";

const TableProductsUser = () => {
  const { products } = useContext(productsContext);
  const { cart, setCart } = useContext(cartContext);



const addToCart = (product) => {

  setCart([...cart, product])
}





  const paintTableProducts = () => {
    return products.map((product, index) => (
      <tr key={index}>
        <td>
          <img src={product.image} alt={product.title} height="70px" />
        </td>
        <td>{product.title}</td>
        <td>
          <button onClick={() => {addToCart(product)}}>Add to Cart</button>
        </td>
      </tr>
    ));
  };

  return paintTableProducts();
};

export default TableProductsUser;
