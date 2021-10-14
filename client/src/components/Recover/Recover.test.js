import React from "react";
import { render, screen } from "@testing-library/react";
import Recover from ".";

describe("Recover", () => {
  test("matches snapshot", () => {
    render(<Recover />);
    expect(screen).toMatchSnapshot();
  });
});