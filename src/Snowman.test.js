import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

test("disallow making guesses after 6", () => {
  const { container, debug } = render(<Snowman />);
  
  const buttons = container.querySelectorAll('button');
  for (let i = 0; i < 8; i++) {
    fireEvent.click(buttons[i]);
  }
  const buttonArea = container.querySelector("#buttonArea");
  expect(buttonArea).not.toBeInTheDocument();
});