import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ContactSection } from "./ContactSection";

describe("ContactSection", () => {
  it("renders memorable phone numbers and direct contact links", () => {
    render(<ContactSection />);

    expect(screen.getAllByText("0100")).toHaveLength(2);
    expect(screen.getByText("560")).toBeTruthy();
    expect(screen.getByText("3378")).toBeTruthy();
    expect(screen.getByText("551")).toBeTruthy();
    expect(screen.getByText("6354")).toBeTruthy();

    expect(
      screen
        .getByRole("link", { name: "اتصل على 0100 560 3378" })
        .getAttribute("href"),
    ).toBe("tel:+201005603378");
    expect(
      screen
        .getByRole("link", { name: "اتصل على 0100 551 6354" })
        .getAttribute("href"),
    ).toBe("tel:+201005516354");
    expect(
      screen
        .getByRole("link", { name: "واتساب: ابدأ محادثة مباشرة" })
        .getAttribute("href"),
    ).toBe("https://wa.me/201005603378");
    expect(
      screen
        .getByRole("link", {
          name: "البريد الإلكتروني: info@sakha7.com",
        })
        .getAttribute("href"),
    ).toBe("mailto:info@sakha7.com");
  });
});
