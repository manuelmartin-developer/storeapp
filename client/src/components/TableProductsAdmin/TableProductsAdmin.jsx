import React, { useContext } from "react";
import { productsContext } from "../../contexts/productsContext";
import axios from "axios";
import { Toast } from "../../hooks/useToast";

const TableProductsAdmin = () => {

  const { products, setProducts } = useContext(productsContext);



  const removeProduct = (id, index) => {

    const payload = {
      id: id
    };

    const options = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    (async () => {
      try {
        const response = await axios.post(
          "http://localhost:9000/products/remove",
          payload,
          options
        );

        if (response.status === 202) {
          Toast.fire({
            icon: "success",
            title: "Product remove from DB",
          });

          setProducts(products.filter((current, currentIndex) => currentIndex !== index))
        }
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "Something has failed",
        });
      }
    })();
  }

  const paintTableProducts = () => {
    return products.map((product, index) => (
      <tr key={index}>
        <td>
          <img src={product.image} alt={product.title} height="70px" />
        </td>
        <td>{product.title}</td>
        <td>
          <button onClick={() => {removeProduct(product.id, index)}}>Remove Product</button>
        </td>
      </tr>
    ));
  };

  return (
    paintTableProducts()
  );
};

export default TableProductsAdmin;
