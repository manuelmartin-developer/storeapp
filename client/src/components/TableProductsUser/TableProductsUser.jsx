import React, { useContext, useState, useEffect, useRef  } from "react";
import { productsContext } from "../../contexts/productsContext";
import useDebounce from "../../hooks/useDebounce";
import Paginator from "react-hooks-paginator";
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import { Link } from "react-router-dom";
import { BsArrowUpShort, BsArrowDownShort, BsMinecartLoaded } from "react-icons/bs";
import { useCart } from "react-use-cart";
const TableProductsUser = () => {
  // Context
  const { products } = useContext(productsContext);
  

  // Cart
  const { addItem } = useCart();

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

  // Product Sorting
  const [sortingProduct, setSortingProducts] = useState("");

  useEffect(() => {
    if (sortingProduct === "productsDesc") {
      products.sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      );
      setCurrentData(products.slice(offset, offset + pageLimit));
    }
    if (sortingProduct === "productsAsc") {
      products.sort((a, b) =>
        a.title < b.title ? 1 : b.title < a.title ? -1 : 0
      );
      setCurrentData(products.slice(offset, offset + pageLimit));
    }
  }, [sortingProduct, products, offset]);

  // Price Sorting
  const [sortingPrice, setSortingPrice] = useState("");

  useEffect(() => {
    if (sortingPrice === "priceDesc") {
      products.sort((a, b) =>
        a.price > b.price ? 1 : b.price > a.price ? -1 : 0
      );
      setCurrentData(products.slice(offset, offset + pageLimit));
    }
    if (sortingPrice === "priceAsc") {
      products.sort((a, b) =>
        a.price < b.price ? 1 : b.price < a.price ? -1 : 0
      );
      setCurrentData(products.slice(offset, offset + pageLimit));
    }
  }, [sortingPrice, products, offset]);

  // Rating Sorting
  const [sortingRating, setSortingRating] = useState("");

  useEffect(() => {
    if (sortingRating === "ratingDesc") {
      products.sort((a, b) =>
        a.rating > b.rating ? 1 : b.rating > a.rating ? -1 : 0
      );
      setCurrentData(products.slice(offset, offset + pageLimit));
    }
    if (sortingRating === "ratingAsc") {
      products.sort((a, b) =>
        a.rating < b.rating ? 1 : b.rating < a.rating ? -1 : 0
      );
      setCurrentData(products.slice(offset, offset + pageLimit));
    }
  }, [sortingRating, products, offset]);

  // Search
  const [input, setInput] = useState("");
  const inputSearch = useRef(null);
  const debouncedSearchTerm = useDebounce(input, 200);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    if (input) {
      const filterProducts = products.filter(product => product.title.toLowerCase().includes(input.toLocaleLowerCase()) || product.manufacturer.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
      setCurrentData(filterProducts.slice(offset, offset + pageLimit));
    }
  }, [debouncedSearchTerm, input, offset, products]);

  return (
    <>
    <table className="table">
      <thead className="table-thead">
        <tr className="table-thead-tr">
          <th></th>
          <th className="table-thead-tr-th" scope="col">
            Product{" "}
            <button
            className="table-thead-tr-th-sorting"
              onClick={
                sortingProduct === ""
                  ? () => {
                      setSortingProducts("productsDesc");
                    }
                  : sortingProduct === "productsDesc"
                  ? () => {
                      setSortingProducts("productsAsc");
                    }
                  : () => {
                      setSortingProducts("productsDesc");
                    }
              }
            >
              {sortingProduct === "" || sortingProduct === "productsAsc" ? (
                <BsArrowDownShort />
              ) : (
                <BsArrowUpShort />
              )}
            </button>
          </th>
          <th className="table-thead-tr-th" scope="col">
            Price{" "}
            <button
            className="table-thead-tr-th-sorting"
              onClick={
                sortingPrice === ""
                  ? () => {
                      setSortingPrice("priceDesc");
                    }
                  : sortingPrice === "priceDesc"
                  ? () => {
                      setSortingPrice("priceAsc");
                    }
                  : () => {
                      setSortingPrice("priceDesc");
                    }
              }
            >
              {sortingPrice === "" || sortingPrice === "priceAsc" ? (
                <BsArrowDownShort />
              ) : (
                <BsArrowUpShort />
              )}
            </button>
          </th>
          <th className="table-thead-tr-th" scope="col">
            Rating{" "}
            <button
            className="table-thead-tr-th-sorting"
              onClick={
                sortingRating === ""
                  ? () => {
                      setSortingRating("ratingDesc");
                    }
                  : sortingRating === "ratingDesc"
                  ? () => {
                      setSortingRating("ratingAsc");
                    }
                  : () => {
                      setSortingRating("ratingDesc");
                    }
              }
            >
              {sortingRating === "" || sortingRating === "ratingAsc" ? (
                <BsArrowDownShort />
              ) : (
                <BsArrowUpShort />
              )}
            </button>
          </th>
        </tr>
        <tr className="table-thead-tr">
          <th className="table-thead-tr-th-input" colSpan="4">
            <input
              type="text"
              placeholder="Search by name or manufacturer..."
              autoComplete="off"
              ref={inputSearch}
              onChange={handleChange}
            />
          </th>
        </tr>
      </thead>
      <tbody className="table-tbody">
        {currentData.map((data, index) => (
          <tr key={index} className="table-tbody-tr">
            <td className="table-tbody-tr-td">
              <img src={data.image} alt={data.title} className="table-tbody-tr-td-img"/>
              <button onClick={() => {addItem(data)}}><BsMinecartLoaded /></button>
            </td>
            <td className="table-tbody-tr-td">
              <Link to={`/product/id?id=${data.id}`}>{data.title}</Link>
            </td>
            <td className="table-tbody-tr-td">{data.price}$ </td>
            <td className="table-tbody-tr-td">
            <Rate
            disabled={true}
              value={data.rating}
              style={{ fontSize: 10 }}
              allowClear={false}
            />
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

export default TableProductsUser;
