import { render, screen } from "@testing-library/react";
import { UISelect } from "./UISelect";

describe("Button", () => {
  test("Test render ", () => {
    render(<UISelect>Test</UISelect>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
