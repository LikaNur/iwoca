import { describe, it, expect } from "vitest";
import { formatCurrency, formatDate } from "./format";

describe("formatCurrency", () => {
  it("formats number as GBP currency", () => {
    expect(formatCurrency(37597)).toBe("£37,597");
    expect(formatCurrency(1000)).toBe("£1,000");
    expect(formatCurrency(0)).toBe("£0");
  });
});

describe("formatDate", () => {
  it("formats date to DD-MM-YYYY", () => {
    expect(formatDate("2021-08-10")).toBe("10-08-2021");
    expect(formatDate(new Date("2021-12-02"))).toBe("02-12-2021");
  });
});

