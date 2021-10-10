import React, { useContext } from "react";
import { useQueryParam, StringParam } from 'use-query-params';
import { productsContext } from "../../contexts/productsContext";


const Details = () => {

  const [id] = useQueryParam('id', StringParam);

  const { products } = useContext(productsContext);

  const product = products.filter(element => element.id === id);

  return (
    <section className="details">
      <img src={product[0].image} alt={product[0].title} />
      <p>{product[0].title}</p>
      <p>{product[0].price}</p>
      <p>{product[0].manufacturer.name}</p>
      <p>{product[0].manufacturer.cif}</p>
      <p>{product[0].manufacturer.address}</p>

    </section>
  );
};

export default Details;
