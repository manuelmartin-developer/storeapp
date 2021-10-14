import React from "react";
import { render, screen } from "@testing-library/react";
import Cart from ".";

describe("Cart", () => {
  test("matches snapshot", () => {
    render(<Cart />);
    expect(screen).toMatchSnapshot();
  });
});