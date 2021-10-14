import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("Footer", () => {
  test("matches snapshot", () => {
    render(<Footer />);
    expect(screen).toMatchSnapshot();
  });
});