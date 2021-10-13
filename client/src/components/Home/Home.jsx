import React, { useEffect, useContext } from "react";
import TableProducts from "../TableProducts";
import TableProductsUser from "../TableProductsUser";
import TableProductsAdmin from "../TableProductsAdmin";
import NewProduct from "../NewProduct";
import axios from "axios";
import { productsContext } from "../../contexts/productsContext";
import { userContext } from "../../contexts/userContext";
import { adminContext } from "../../contexts/adminContext";

const Home = () => {
  const { setProducts } = useContext(productsContext);
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

  return (
    <section className="productlist">
      {userLogged && isAdmin ? (
        <>
          <section className="productlist-new">
            <NewProduct />
          </section>
          <section className="productlist-admin">
            <TableProductsAdmin />
          </section>
        </>
      ) : userLogged && !isAdmin ? (
        <TableProductsUser />
      ) : (
        <TableProducts />
      )}
    </section>
  );
};

export default Home;
