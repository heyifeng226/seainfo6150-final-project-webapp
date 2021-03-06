import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Home from "./Home.jsx";
import { BrowserRouter, Link } from "react-router-dom";

it("renders the Home component correctly", () => {
  const { container } = render(<BrowserRouter><Home /></BrowserRouter>);
  expect(container).toMatchSnapshot();
});
