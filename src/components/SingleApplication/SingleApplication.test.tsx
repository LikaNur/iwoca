import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SingleApplication from "./SingleApplication";
import { IApplication } from "../Applications/ApplicationsTypes";

const mockApplication: IApplication = {
  id: 1,
  loan_amount: 37597,
  first_name: "John",
  last_name: "Doe",
  company: "Test Company",
  email: "john@test.com",
  date_created: "2021-08-10",
  expiry_date: "2021-12-02",
};

describe("SingleApplication", () => {
  it("renders application data", () => {
    render(<SingleApplication application={mockApplication} />);
    expect(screen.getByText("Test Company")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("£37,597")).toBeInTheDocument();
  });

  it("renders email as clickable link", () => {
    render(<SingleApplication application={mockApplication} />);
    const emailLink = screen.getByRole("link");
    expect(emailLink).toHaveAttribute("href", "mailto:john@test.com");
  });
});

