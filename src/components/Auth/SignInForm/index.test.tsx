import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";

import { render, screen, userEvent } from "../../../lib/util/test-utils";
import { SecurityQuestions } from "../SecurityQuestions";

describe("Sign in form", async () => {
  it("Should render without crash", async () => {
    render(
      <MemoryRouter>
        <SecurityQuestions />
      </MemoryRouter>,
    );

    expect(screen.getByText(/sing in/i)).toBeDefined();

    const passwordInput = screen.getByLabelText(/Create Password/);
    act(() => {
      userEvent.type(passwordInput, "{backspace}123456789");
    });
    expect(passwordInput).toHaveValue("123456789");
  });
});
