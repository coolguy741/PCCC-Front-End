import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import { Mock, vi } from "vitest";

import { render, screen, userEvent } from "../../../lib/util/test-utils";
import { ResetPasswordForm } from "../ResetPasswordForm";

describe("ResetPasswordForm", async () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ResetPasswordForm />
      </MemoryRouter>,
    );
  });

  it("Should render without crash", async () => {
    expect(screen.getByText(/Password Reset/i)).toBeTruthy();
    expect(screen.getByLabelText(/new password/i)).toBeTruthy();
    expect(screen.getByLabelText(/retype password/i)).toBeTruthy();
    expect(screen.getByTestId("submit")).toBeTruthy();
  });

  it("Should send the request with the new password", async () => {
    const password = "jenkins";
    const newPasswordInput = screen.getByLabelText(/new password/i);
    const passwordInput = screen.getByLabelText(/retype password/i);
    const submit = screen.getByTestId("submit");

    vi.spyOn(global, "fetch").mockImplementation(
      vi.fn(async () => ({
        ok: true,
        json: async () => ({
          password,
        }),
      })) as Mock,
    );

    act(() => {
      userEvent.type(newPasswordInput, `{backspace}${password}`);
      userEvent.type(passwordInput, `{backspace}${password}`);
      userEvent.click(submit);
    });
    expect(fetch).toHaveBeenCalledWith(
      "https://backend-dev.powerfullkids.ca/api/app/user/reset-password",
      {
        body: `${""}{"username":"","newPassword":"jenkins","firstQuestionAnswer":"","secondQuestionAnswer":"","thirdQuestionAnswer":""}`,
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        redirect: "follow",
        referrerPolicy: "no-referrer",
        signal: undefined,
      },
    );
  });
});
