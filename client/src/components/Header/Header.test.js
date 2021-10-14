import React from "react";
import { render, screen } from "@testing-library/react";
import Header from ".";
import { userContext } from "../../contexts/userContext";
import { adminContext } from "../../contexts/adminContext";
import { BrowserRouter } from "react-router-dom";



describe("Header", () => {
  test('matches snapshot', () => {
 
    render(
      <BrowserRouter>
        <userContext.Provider value={false}>
          <adminContext.Provider value={false}>
            <Header />
          </adminContext.Provider>
        </userContext.Provider>
      </BrowserRouter>
    );
    expect(screen).toMatchSnapshot();
  });
});