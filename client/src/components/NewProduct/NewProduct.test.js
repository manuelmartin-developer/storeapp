import React from "react";
import { render, screen } from "@testing-library/react";
import NewProduct from ".";
import { productsContext } from "../../contexts/productsContext";
import { userContext } from "../../contexts/userContext";
import { adminContext } from "../../contexts/adminContext";
import { products } from '../../setupTests';

describe("NewProduct", () => {
  test("matches snapshot", () => {
    render(
      <productsContext.Provider value={{products:products}}>
      <userContext.Provider value={false}>
        <adminContext.Provider value={false}>
       
      <NewProduct />
        </adminContext.Provider>
      </userContext.Provider>
      </productsContext.Provider>
    );
    expect(screen).toMatchSnapshot();
  });
});