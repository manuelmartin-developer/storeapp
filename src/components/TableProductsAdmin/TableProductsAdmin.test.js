import React from "react";
import { shallow } from "enzyme";
import TableProductsAdmin from "./TableProductsAdmin";

describe("TableProductsAdmin", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TableProductsAdmin />);
    expect(wrapper).toMatchSnapshot();
  });
});
