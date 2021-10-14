import React from "react";
import { render, screen } from "@testing-library/react";
import Logout from ".";
import { userContext } from "../../contexts/userContext";
import { adminContext } from "../../contexts/adminContext";
import { BrowserRouter } from "react-router-dom";


describe("Logout", () => {
  test('Logout is visible', () => {
 
    render(
      <BrowserRouter>
        <userContext.Provider value={false}>
          <adminContext.Provider value={false}>
            <Logout />
          </adminContext.Provider>
        </userContext.Provider>
      </BrowserRouter>
    );
    expect(screen).toMatchSnapshot();
  });
});