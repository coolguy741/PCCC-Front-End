import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

import { render, screen, userEvent } from "../../../../lib/util/test-utils";
import { useMealPlannerStore } from "../../../../stores/mealPlannerStore";
import { MealPlanGenerator } from "./generator";

describe("Meal Plan Generator", async () => {
  const initialState = useMealPlannerStore.getState();

  beforeEach(() => {
    initialState.changeStep = vi.fn();
    useMealPlannerStore.setState(initialState, true);
    render(
      <MemoryRouter>
        <MealPlanGenerator />
      </MemoryRouter>,
    );
  });

  it("Should render without crash", async () => {
    expect(
      screen.getByText(/Lettuce help you build a meal plan/i),
    ).toBeTruthy();
    expect(screen.getByTestId("dates")).toBeTruthy();
    expect(screen.getByTestId("day")).toBeTruthy();
    expect(screen.getByTestId("filter")).toBeTruthy();
    expect(screen.getByTestId("book-picker")).toBeTruthy();
  });

  it("Should go to next step", async () => {
    const createPlan = screen.getByTestId("create-plan");
    await act(() => {
      userEvent.click(createPlan);
    });
    expect(useMealPlannerStore.getState().changeStep).toHaveBeenLastCalledWith(
      2,
    );
  });
});
