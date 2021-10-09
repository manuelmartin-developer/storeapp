import React, { useEffect, useContext } from "react";
import TableProducts from "../TableProducts";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { productsContext } from "../../contexts/productsContext";

const Home = () => {
  const { products, setProducts } = useContext(productsContext);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get("http://localhost:9000/products");
        setProducts(result.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setProducts]);


  if (products.length === 0) {
    return (
      <section className="productlist">
        <Spinner animation="grow" variant="secondary" />
      </section>
    );
  } else {
    return (
      <section className="productlist">
        <table>
          <tbody>
            <TableProducts />
          </tbody>
        </table>
      </section>
    );
  }
};

export default Home;
