import React from "react";
import { render, screen } from "@testing-library/react";
import { userContext } from "../../contexts/userContext";
import { adminContext } from "../../contexts/adminContext";
import { QueryParamProvider } from 'use-query-params';
import { Route, BrowserRouter } from 'react-router-dom';


import Login from ".";

describe("Login", () => {
  test("matches snapshot", () => {
    render(
      <BrowserRouter>
        <userContext.Provider value={false}>
        <adminContext.Provider value={false}>
        <QueryParamProvider ReactRouterRoute={Route}>
          <Login />
        </QueryParamProvider>
        </adminContext.Provider>
        </userContext.Provider>
      </BrowserRouter>
    );
    expect(screen).toMatchSnapshot();
  });
});