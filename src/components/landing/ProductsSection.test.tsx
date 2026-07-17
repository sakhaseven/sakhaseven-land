import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ProductsSection } from "./ProductsSection";

afterEach(cleanup);

describe("ProductsSection", () => {
  it("shows only the currently available wheat and rice seed lines", () => {
    render(<ProductsSection />);

    expect(screen.getByRole("heading", { name: "تقاوي القمح" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "تقاوي الأرز" })).toBeTruthy();
    expect(screen.queryByText("تقاوي الذرة")).toBeNull();
    expect(screen.queryByText("تقاوي الفول")).toBeNull();
  });

  it("opens, navigates, and closes a product gallery", () => {
    render(<ProductsSection />);

    fireEvent.click(
      screen.getByRole("button", {
        name: "افتح معرض صور تقاوي القمح",
      }),
    );

    expect(
      screen.getByRole("dialog", { name: "معرض تقاوي القمح" }),
    ).toBeTruthy();
    expect(screen.getAllByText("بداية مدروسة في الأرض").length).toBeGreaterThan(0);

    fireEvent.click(screen.getByRole("button", { name: "الصورة التالية" }));
    expect(screen.getAllByText("متابعة مستمرة للمحصول").length).toBeGreaterThan(0);

    fireEvent.click(
      screen.getByRole("button", { name: "إغلاق معرض الصور" }),
    );
    expect(screen.queryByRole("dialog")).toBeNull();
  });
});
