import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import Paginator from "react-hooks-paginator";
import StarRatings from "react-star-ratings";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";

const TableProducts = () => {
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

  return (
    <>
      <table>
        <thead>
          <th><input type="text" name="search" placeholder="Search by name or manufacturer..." autoComplete="off"/></th>
          <th>
            Product{" "}
            <button
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
                <BsArrowUpShort />
              ) : (
                <BsArrowDownShort />
              )}
            </button>
          </th>
          <th>
            Price{" "}
            <button
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
                <BsArrowUpShort />
              ) : (
                <BsArrowDownShort />
              )}
            </button>
          </th>
          <th>
            Rating{" "}
            <button
              onClick={
                sortingRating === ""
                  ? () => {
                      setSortingRating("ratingDesc");
                    }
                  : sortingRating=== "ratingDesc"
                  ? () => {
                      setSortingRating("ratingAsc");
                    }
                  : () => {
                      setSortingRating("ratingDesc");
                    }
              }
            >
              {sortingRating === "" || sortingRating === "ratingAsc" ? (
                <BsArrowUpShort />
              ) : (
                <BsArrowDownShort />
              )}
            </button>
          </th>
        </thead>
        <tbody>
          {currentData.map((data, index) => (
            <tr key={index}>
              <td>
                <img src={data.image} alt={data.title} height="100px" />
              </td>
              <td>
                <Link to={`/product/id?id=${data.id}`}>{data.title}</Link>
              </td>
              <td>{data.price}</td>
              <td>
                <StarRatings
                  rating={data.rating}
                  numberOfStars={5}
                  starRatedColor="#ffd700"
                  starDimension="40px"
                  starSpacing="15px"
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

export default TableProducts;
