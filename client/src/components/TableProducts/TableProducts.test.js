import React from "react";
import { shallow } from "enzyme";
import TableProducts from "./TableProducts";

describe("TableProducts", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TableProducts />);
    expect(wrapper).toMatchSnapshot();
  });
});
