import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

test("renders Card correctly", () => {
  const title = "ติดเชื้อสะสม";
  const number = 90000;
  const color = "#c83812";
  render(<Card title={title} number={number} color={color} />);
  expect(screen.getByText(title, number, color)).toBeInTheDocument();

  /*  expect(screen.getAllByText(number)).toBeRequired()
  expect(screen.getAllByText(color)).toBeRequired() */
});
