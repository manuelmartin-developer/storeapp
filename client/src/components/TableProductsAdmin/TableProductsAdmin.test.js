import React from "react";
import { render, screen } from "@testing-library/react";
import TableProductsAdmin from ".";
import { productsContext } from "../../contexts/productsContext";
import { products, data } from '../../setupTests';
import { BrowserRouter } from 'react-router-dom';


describe("TableProductsAdmin", () => {
  test("matches snapshot", () => {
    render(
      <BrowserRouter>
        <productsContext.Provider value={{products: products, data: data}}>
          <TableProductsAdmin />
        </productsContext.Provider>
      </BrowserRouter>
    );
    expect(screen).toMatchSnapshot();
  });
});