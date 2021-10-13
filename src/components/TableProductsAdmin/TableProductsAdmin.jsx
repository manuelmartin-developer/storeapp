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
          "https://helloworld-store.herokuapp.com/products/remove",
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
      <table className="table">
        <thead className="table-thead">
          <tr className="table-thead-tr">
            <th className="table-thead-tr-th">Image</th>
            <th className="table-thead-tr-th">Title</th>
            <th className="table-thead-tr-th">Remove</th>
          </tr>
        </thead>
        <tbody className="table-tbody">
          {currentData.map((data, index) => (
            <tr key={index} className="table-tbody-tr">
              <td className="table-tbody-tr-td">
                <img src={data.image} alt={data.title} height="100px" />
              </td>
              <td className="table-tbody-tr-td">
                <Link to={`/update/id?id=${data.id}`}>{data.title}</Link>
              </td>
              <td className="table-tbody-tr-td__button">
                <button
                  onClick={() => {
                    removeProduct(data.id, index);
                  }}
                >
                  X
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
