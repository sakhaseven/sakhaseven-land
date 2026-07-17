import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProductsSection } from "./ProductsSection";

describe("ProductsSection", () => {
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
