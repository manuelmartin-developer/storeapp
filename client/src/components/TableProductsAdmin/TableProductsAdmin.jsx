import React, { useContext, useState, useEffect } from "react";
import { productsContext } from "../../contexts/productsContext";
import axios from "axios";
import { Link } from "react-router-dom";
import { Toast } from "../../hooks/useToast";
import Paginator from "react-hooks-paginator";

const TableProductsAdmin = () => {
  // Context
  const { products, setProducts } = useContext(productsContext);

  // Pagination
  const pageLimit = 10;
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    setData(products);
  }, [products]);

  useEffect(() => {
    setCurrentData(data.slice(offset, offset + pageLimit));
  }, [offset, data]);

  // Products
  const removeProduct = (id, index) => {
    const payload = {
      id: id,
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
          
          setProducts(
            products.filter((current, currentIndex) => currentIndex !== index)
            );
        }
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "Something has failed",
        });
      }
    })();
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Remove</th>
          </tr>
            </thead>
          <tbody>
            {currentData.map((data, index) => (
              <tr key={index}>
                <td>
                  <img src={data.image} alt={data.title} height="100px" />
                </td>
                <td>
                <Link to={`/update/id?id=${data.id}`}>{data.title}</Link>
              </td>
                <td>
                  <button
                    onClick={() => {
                      removeProduct(data.id, index);
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
      </table>
      <Paginator
        totalRecords={data.length}
        pageLimit={pageLimit}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default TableProductsAdmin;
