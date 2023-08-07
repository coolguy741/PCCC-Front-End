import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

import { render, screen } from "../../../../lib/util/test-utils";
import { useMealPlannerStore } from "../../../../stores/mealPlannerStore";
import { ClosedPlateFullPlannerBook } from "../ClosedBook";

describe("Full Planner Closed Book", async () => {
  const initialState = useMealPlannerStore.getState();

  beforeEach(() => {
    initialState.setCurrentStep = vi.fn();
    useMealPlannerStore.setState(initialState, true);
    render(
      <MemoryRouter>
        <ClosedPlateFullPlannerBook />
      </MemoryRouter>,
    );
  });

  it("Should render without crash", async () => {
    expect(screen.getByText(/Swipe left to open/i)).toBeTruthy();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "/images/plate-full-planner/book-closed.svg",
    );
  });
});
