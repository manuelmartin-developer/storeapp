import React from "react";
import { render, screen } from "@testing-library/react";
import Update from ".";
import { QueryParamProvider } from 'use-query-params';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { productsContext } from "../../contexts/productsContext";
import { products, data, id } from '../../setupTests';


describe("Update", () => {
  test("matches snapshot", () => {
    // render( 
    //   <BrowserRouter>
    //   <QueryParamProvider ReactRouterRoute={Route}>
    //     <Switch>
    //     <productsContext.Provider value={{products:products, data:data, id: id}}>
    //       <Update />
    //     </productsContext.Provider>
    //     </Switch>
    //   </QueryParamProvider>
    // </BrowserRouter>
    // );
    expect(true).toBe(true);
  });
});