import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";

import {
  cleanup,
  render,
  screen,
  userEvent,
} from "../../../lib/util/test-utils";
import { useSignUpStore } from "../../../stores/signUpStore";
import { RoleGate } from "../RoleGate";

describe("Role gate", async () => {
  const initialState = useSignUpStore.getState();
  beforeEach(() => {
    useSignUpStore.setState(initialState, true);
    cleanup();
    render(
      <MemoryRouter>
        <RoleGate />
      </MemoryRouter>,
    );
  });

  it("Should role gate render without crash", async () => {
    expect(screen.getByText(/Sign Up/i)).toBeTruthy();
    expect(screen.getByLabelText(/yes/i)).toBeTruthy();
    expect(screen.getByLabelText(/no/i)).toBeTruthy();
  });

  it("Should role gate unset coordinator when user click 'no'", async () => {
    const yesRadio = screen.getByLabelText(/yes/i);
    const noRadio = screen.getByLabelText(/no/i);

    expect(yesRadio).not.toBeChecked();
    expect(noRadio).not.toBeChecked();
    act(() => {
      userEvent.click(noRadio);
    });
    expect(yesRadio).not.toBeChecked();
    expect(noRadio).toBeChecked();

    const { isCoordinator } = useSignUpStore.getState();

    expect(isCoordinator).toBe(false);

    const submit = screen.getByTestId(/submit/i);

    expect(submit).toBeTruthy();

    await act(() => {
      userEvent.click(submit);
    });

    const { currentStep } = useSignUpStore.getState();

    expect(currentStep).toBe(2);
  });

  it("Should role gate set coordinator when user click 'yes'", async () => {
    const yesRadio = screen.getByLabelText(/yes/i);
    const noRadio = screen.getByLabelText(/no/i);
    const schoolIdValue = "1234";
    const schoolNameValue = "Kingston";

    expect(yesRadio).not.toBeChecked();
    expect(noRadio).not.toBeChecked();
    act(() => {
      userEvent.click(yesRadio);
    });
    expect(noRadio).not.toBeChecked();
    expect(yesRadio).toBeChecked();

    const { isCoordinator } = useSignUpStore.getState();

    expect(isCoordinator).toBe(true);

    const submit = screen.getByTestId(/submit/i);
    const schoolId = screen.getByTestId(/school-id/i);
    const schoolName = screen.getByTestId(/school-name/i);

    expect(submit).toBeTruthy();
    expect(schoolId).toBeTruthy();
    expect(schoolName).toBeTruthy();

    act(() => {
      userEvent.type(schoolId, `{backspace}${schoolIdValue}`);
      userEvent.type(schoolName, `{backspace}${schoolNameValue}`);
    });
    expect(schoolId).toHaveValue(schoolIdValue);
    expect(schoolName).toHaveValue(schoolNameValue);
    await act(() => {
      userEvent.click(submit);
    });

    const {
      currentStep,
      schoolIdCode: schoolIdInStore,
      schoolName: schoolNameInStore,
    } = useSignUpStore.getState();

    expect(schoolIdInStore).toBe(schoolIdValue);
    expect(schoolNameInStore).toBe(schoolNameInStore);
    expect(currentStep).toBe(2);
  });
});
