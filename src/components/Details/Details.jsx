import React, { useContext } from "react";
import { useQueryParam, StringParam } from "use-query-params";
import { productsContext } from "../../contexts/productsContext";

const Details = () => {
  const [id] = useQueryParam("id", StringParam);

  const { products } = useContext(productsContext);

  const product = products.filter((element) => element.id === id);

  return (
    <section className="details">
      <img
        className="details-img"
        src={product[0].image}
        alt={product[0].title}
      />
      <table className="details-table">
        <thead className="details-table-thead">
          <tr className="details-table-thead-tr">
            <th className="details-table-thead-tr-th" scope="row">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{product[0].title}</td>
          </tr>
          <tr>
            <td>{product[0].price}$</td>
          </tr>
          <tr>
            <td>{product[0].manufacturer.name}</td>
          </tr>
          <tr>
            <td>{product[0].manufacturer.cif}</td>
          </tr>
          <tr>
            <td>{product[0].manufacturer.address}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Details;
