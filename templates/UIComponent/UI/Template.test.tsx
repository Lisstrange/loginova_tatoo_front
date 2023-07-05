import { render, screen } from "@testing-library/react";
import { Template } from "./Template";

describe("Button", () => {
  test("Test render ", () => {
    render(<Template>Test</Template>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
