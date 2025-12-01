import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Applications from "./Applications";
import { IApplication } from "./ApplicationsTypes";

global.fetch = vi.fn();

const mockApplications: IApplication[] = [
  {
    id: 1,
    loan_amount: 37597,
    first_name: "John",
    last_name: "Doe",
    company: "Test Company",
    email: "john@test.com",
    date_created: "2021-08-10",
    expiry_date: "2021-12-02",
  },
];

const mockResponse = (hasNext: boolean) => ({
  ok: true,
  json: async () => mockApplications,
  headers: { get: () => hasNext ? 'rel="next"' : null },
});

describe("Applications", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("fetches and displays applications", async () => {
    (fetch as any).mockResolvedValueOnce(mockResponse(true));
    render(<Applications />);

    await waitFor(() => {
      expect(screen.getByText("Test Company")).toBeInTheDocument();
    });
    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:3001/api/applications?_page=1&_limit=5"
    );
  });

  it("shows Load More button when more pages available", async () => {
    (fetch as any).mockResolvedValueOnce(mockResponse(true));
    render(<Applications />);

    await waitFor(() => {
      expect(screen.getByText("Load More")).toBeInTheDocument();
    });
  });

  it("hides Load More button when no more pages", async () => {
    (fetch as any).mockResolvedValueOnce(mockResponse(false));
    render(<Applications />);

    await waitFor(() => {
      expect(screen.queryByText("Load More")).not.toBeInTheDocument();
    });
  });

  it("handles API errors", async () => {
    (fetch as any).mockRejectedValueOnce(new Error("Network error"));
    render(<Applications />);

    await waitFor(() => {
      expect(screen.getByText(/Error:/i)).toBeInTheDocument();
    });
  });
});
