import React, { useContext } from "react";
import { productsContext } from "../../contexts/productsContext";

const TableProducts = () => {

  const { products } = useContext(productsContext);

  const paintTableProducts = () => {
    return products.map((product, index) => <tr key={index}><td key=
    {index}>{product.title}</td></tr>)
  }

  return (
    paintTableProducts()
  )
};

export default TableProducts;
