import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it('renders "Application Portal" title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Application Portal/i);
    expect(titleElement).toBeInTheDocument();
  });
});
