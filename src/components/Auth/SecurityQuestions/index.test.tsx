// import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";

import { render, screen, userEvent } from "../../../lib/util/test-utils";
import { SecurityQuestions } from "../SecurityQuestions";

describe("Sign up form", async () => {
  it("Should render", async () => {
    render(
      <MemoryRouter>
        <SecurityQuestions />
      </MemoryRouter>,
    );

    expect(screen.getByText(/Sign Up/)).toBeDefined();

    const passwordInput = screen.getByLabelText(/Create Password/);
    act(() => {
      userEvent.type(passwordInput, "{backspace}123456789");
    });
    expect(passwordInput).toHaveValue("123456789");
  });
});
