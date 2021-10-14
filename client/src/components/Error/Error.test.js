import React from "react";
import { render, screen } from "@testing-library/react";
import Error from ".";

describe("Error", () => {
  test("matches snapshot", () => {
    render(<Error />);
    expect(screen).toMatchSnapshot();
  });
});