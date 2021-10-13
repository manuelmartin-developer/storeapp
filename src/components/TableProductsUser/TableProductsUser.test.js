import React from "react";
import { shallow } from "enzyme";
import TableProductsUser from "./TableProductsUser";

describe("TableProductsUser", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TableProductsUser />);
    expect(wrapper).toMatchSnapshot();
  });
});
