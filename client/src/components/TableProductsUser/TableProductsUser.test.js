import React from "react";
import { render, screen } from "@testing-library/react";
import TableProductsUser from ".";
import { productsContext } from "../../contexts/productsContext";
import { products, data } from '../../setupTests';
import { BrowserRouter } from 'react-router-dom';


describe("TableProductsUser", () => {
  test("matches snapshot", () => {
    render(
      <BrowserRouter>
        <productsContext.Provider value={{products: products, data: data}}>
          <TableProductsUser />
        </productsContext.Provider>
      </BrowserRouter>
    );
    expect(screen).toMatchSnapshot();
  });
});