import React from "react";
import { render, screen } from "@testing-library/react";
import Signup from ".";

describe("Signup", () => {
  test("matches snapshot", () => {
    render(<Signup />);
    expect(screen).toMatchSnapshot();
  });
});