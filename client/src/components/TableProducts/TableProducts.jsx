import React, { useContext, useState, useEffect } from "react";
import { productsContext } from "../../contexts/productsContext";
import ReactPaginate from "react-paginate";

const TableProducts = () => {

  // Context
  const { products } = useContext(productsContext);

  // Pagination
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  // Methods
  const getProducts = () => {
    const data = products;
    const slice = data.slice(offset, offset + perPage);
    const postData = slice.map((pd) => (
      <tr key={pd.id}>
        <td>
        <p>{pd.title}</p>
        </td>
        <td>
        <img src={pd.image} alt={pd.title} height="100px" />
        </td>
      </tr>
    ));
    setData(postData);
    setPageCount(Math.ceil(data.length / perPage));
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    getProducts();
  }, [offset]);

  return (
    <>
        {data}
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
    </>
  );
};

export default TableProducts;
