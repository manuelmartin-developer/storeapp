import React from "react";
import { shallow } from "enzyme";
import NewProduct from "./NewProduct";

describe("NewProduct", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewProduct />);
    expect(wrapper).toMatchSnapshot();
  });
});
