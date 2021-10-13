import React from "react";
import { shallow } from "enzyme";
import Recover from "./Recover";

describe("Recover", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Recover />);
    expect(wrapper).toMatchSnapshot();
  });
});
