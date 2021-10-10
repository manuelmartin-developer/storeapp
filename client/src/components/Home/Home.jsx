import React, { useEffect, useContext } from "react";
import TableProducts from "../TableProducts";
import TableProductsUser from "../TableProductsUser";
import TableProductsAdmin from "../TableProductsAdmin";
import NewProduct from "../NewProduct";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { productsContext } from "../../contexts/productsContext";
import { userContext } from "../../contexts/userContext";
import { adminContext } from "../../contexts/adminContext";
const Home = () => {
  const { products, setProducts } = useContext(productsContext);
  const { userLogged } = useContext(userContext);
  const { isAdmin } = useContext(adminContext);

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
    if(!userLogged){

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
    if(userLogged && !isAdmin){
      return (
        <section className="productlist">
          <table>
            <tbody>
              <TableProductsUser />
            </tbody>
          </table>
        </section>
      );
    }
    if(userLogged && isAdmin){
      return (
        <section className="productlist">
          <section className="productlist-new">
            <NewProduct />
          </section>
        <section className="productlist-admin">
          <table>
            <tbody>
              <TableProductsAdmin />
            </tbody>
          </table>
        </section>
        </section>
      );
    }
  }
};

export default Home;
