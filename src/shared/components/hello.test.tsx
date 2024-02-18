import { screen, render } from "@testing-library/react";
import Hello from "./hello";

describe("Hello component", () => {
  test("check existing of the component", () => {
    render(<Hello />);
    const helEl = screen.getByText(/hello/i);
    expect(helEl).toBeInTheDocument();
  });
});
