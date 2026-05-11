import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders MyCode landing", () => {
  render(<App />);
  const titleElement = screen.getByText(/MyCode/i);
  expect(titleElement).toBeInTheDocument();
});
