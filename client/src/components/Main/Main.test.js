import { render, screen } from '@testing-library/react';
import Main from '.';
import { BrowserRouter } from 'react-router-dom';
import { productsContext } from "../../contexts/productsContext";
import { userContext } from "../../contexts/userContext";
import { adminContext } from "../../contexts/adminContext";
import { products, data } from '../../setupTests';


describe("Main", () => {
  test('Main is visible', () => {
 
    render(
      <BrowserRouter>
        <productsContext.Provider value={{products: products,data:data}}>
        <userContext.Provider value={false}>
          <adminContext.Provider value={false}>
            <Main />
          </adminContext.Provider>
        </userContext.Provider>
        </productsContext.Provider>
      </BrowserRouter>
    );
    expect(screen).toMatchSnapshot();
  });
});
