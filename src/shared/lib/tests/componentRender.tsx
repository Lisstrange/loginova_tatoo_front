import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

export interface ComponentRenderOptions {
  route?: string;
}

export function componentRender(
  component: React.ReactNode,
  options: ComponentRenderOptions = {}
): void {
  const { route = "/" } = options;

  render(<MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>);
}
