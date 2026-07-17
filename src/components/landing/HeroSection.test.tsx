import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HeroSection } from "./HeroSection";

describe("HeroSection", () => {
  it("renders the verification stages in an evenly structured progress list", () => {
    render(<HeroSection />);

    const progress = screen.getByRole("list", {
      name: "مراحل التحقق المكتملة",
    });
    const stages = within(progress).getAllByRole("listitem");

    expect(stages).toHaveLength(3);
    expect(within(stages[0]).getByText("المصدر")).toBeTruthy();
    expect(within(stages[1]).getByText("الفحص")).toBeTruthy();
    expect(within(stages[2]).getByText("التعبئة")).toBeTruthy();
  });
});
