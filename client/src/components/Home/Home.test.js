import React from "react";
import { render, screen } from "@testing-library/react";
import Home from ".";
import { productsContext } from "../../contexts/productsContext";
import { userContext } from "../../contexts/userContext";
import { adminContext } from "../../contexts/adminContext";
import { products, data } from '../../setupTests';
import { BrowserRouter } from 'react-router-dom';



describe("Home", () => {
  test("matches snapshot", () => {
    render(
      <BrowserRouter>
        <productsContext.Provider value={{products: products,data:data}}>
        <userContext.Provider value={false}>
          <adminContext.Provider value={false}>
          <Home />
        </adminContext.Provider>
        </userContext.Provider>
        </productsContext.Provider>
      </BrowserRouter>
    );
    expect(screen).toMatchSnapshot();
  });
});