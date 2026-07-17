import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "./SiteHeader";

describe("SiteHeader", () => {
  it("opens and closes the mobile navigation accessibly", () => {
    render(<SiteHeader />);

    const menuButton = screen.getByRole("button", { name: "فتح القائمة" });
    expect(menuButton.getAttribute("aria-expanded")).toBe("false");

    fireEvent.click(menuButton);

    const closeButton = screen.getByRole("button", { name: "إغلاق القائمة" });
    expect(closeButton.getAttribute("aria-expanded")).toBe("true");

    fireEvent.click(closeButton);
    expect(
      screen.getByRole("button", { name: "فتح القائمة" }).getAttribute("aria-expanded"),
    ).toBe("false");
  });
});
