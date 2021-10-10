import React, { useContext, useState, useEffect  } from "react";
import { productsContext } from "../../contexts/productsContext";
import { cartContext } from "../../contexts/cartContext";
import Paginator from "react-hooks-paginator";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";

const TableProductsUser = () => {
  const { products } = useContext(productsContext);
  const { cart, setCart } = useContext(cartContext);


// Cart
const addToCart = (product) => {

  setCart([...cart, product])
}

// Pagination
const pageLimit = 10;
const [offset, setOffset] = useState(0);
const [currentPage, setCurrentPage] = useState(1);
const [data, setData] = useState([]);
const [currentData, setCurrentData] = useState([]);

useEffect(() => {
  setData(products);
}, []);

useEffect(() => {
  setCurrentData(data.slice(offset, offset + pageLimit));
}, [offset, data]);


  return (
    <>
      <table>
        <thead>
          <th>Image</th>
          <th>Product</th>
          <th>Price</th>
          <th>Rating</th>
        </thead>
        <tbody>
          {currentData.map((data, index) => (
            <tr key={index}>
              <td>
                <img src={data.image} alt={data.title} height="100px" />
              </td>
              <td><Link to={`/product/id?id=${data.id}`}>{data.title}</Link></td>
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
              <td><button onClick={() => {addToCart(data)}}>Add to Cart</button></td>
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
