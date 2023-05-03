import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

import { render, screen, userEvent } from "../../../lib/util/test-utils";
import { useSignUpStore } from "../../../stores/signUpStore";
import { AgeGate } from "../AgeGate";

const currentDate = new Date();

describe("Age gate", async () => {
  const initialState = useSignUpStore.getState();

  beforeEach(() => {
    initialState.changeStep = vi.fn();
    useSignUpStore.setState(initialState, true);
    render(
      <MemoryRouter>
        <AgeGate />
      </MemoryRouter>,
    );
  });

  it("Should render without crash", async () => {
    expect(screen.getByText(/welcome/i)).toBeTruthy();
    expect(screen.getByTestId("year")).toBeTruthy();
    expect(screen.getByTestId("date")).toBeTruthy();
    expect(screen.getByTestId("month")).toBeTruthy();
    expect(screen.getByTestId("province")).toBeTruthy();
  });

  it("Should set step 1 if the age is greater than 18", async () => {
    const yearInputValue = currentDate.getFullYear() - 19;
    const year = screen.getByTestId("year");
    const month = screen.getByTestId("month");
    const date = screen.getByTestId("date");
    const province = screen.getByTestId("province");
    const next = screen.getByTestId("next");

    act(() => {
      userEvent.type(year, `{backspace}${yearInputValue}`);
      userEvent.type(month, "{backspace}4");
      userEvent.type(date, "{backspace}26");
      userEvent.type(province, "{backspace}Kingston");
    });
    expect(year).toHaveValue(yearInputValue);
    expect(month).toHaveValue(4);
    expect(date).toHaveValue(26);
    expect(province).toHaveValue("Kingston");
    await act(() => {
      userEvent.click(next);
    });

    expect(useSignUpStore.getState().changeStep).toHaveBeenCalledWith(1);
  });

  it("Should set step 2 if the age is less than 18", async () => {
    const yearInputValue = currentDate.getFullYear() - 17;
    const year = screen.getByTestId("year");
    const month = screen.getByTestId("month");
    const date = screen.getByTestId("date");
    const province = screen.getByTestId("province");
    const next = screen.getByTestId("next");

    act(() => {
      userEvent.type(year, `{backspace}${yearInputValue}`);
      userEvent.type(month, "{backspace}4");
      userEvent.type(date, "{backspace}26");
      userEvent.type(province, "{backspace}Kingston");
    });
    expect(year).toHaveValue(yearInputValue);
    expect(month).toHaveValue(4);
    expect(date).toHaveValue(26);
    expect(province).toHaveValue("Kingston");
    await act(() => {
      userEvent.click(next);
    });

    expect(useSignUpStore.getState().changeStep).toHaveBeenLastCalledWith(2);
  });
});
