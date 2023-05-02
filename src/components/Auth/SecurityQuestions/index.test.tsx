import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import { Mock, vi } from "vitest";

import {
  render,
  screen,
  userEvent,
  waitFor,
} from "../../../lib/util/test-utils";
import { SecurityQuestions } from "../SecurityQuestions";

describe("Sign up form", async () => {
  beforeEach(() => {
    vi.spyOn(global, "fetch").mockImplementation(
      vi.fn(async () => ({
        ok: true,
        json: async () => ({
          firstSecurityQuestions: [
            { id: 1, question: "What is your favorite color?" },
          ],
          secondSecurityQuestions: [
            { id: 1, question: "What is your favorite food?" },
          ],
          thirdSecurityQuestions: [
            { id: 1, question: "What is your favorite fruit?" },
          ],
        }),
      })) as Mock,
    );
    render(
      <MemoryRouter>
        <SecurityQuestions />
      </MemoryRouter>,
    );
  });

  it("Should render", async () => {
    expect(screen.getByText(/Sign Up/)).toBeDefined();

    const passwordInput = screen.getByTestId("password");

    act(() => {
      userEvent.type(passwordInput, "{backspace}123456789");
    });
    expect(passwordInput).toHaveValue("123456789");
  });

  it("Should load security questions", async () => {
    expect(fetch).toHaveBeenCalledWith(
      "https://backend-dev.powerfullkids.ca/api/app/custom-security-question-choices/security-questions",
      {
        body: null,
        credentials: "same-origin",
        headers: {},
        method: "GET",
        redirect: "follow",
        referrerPolicy: "no-referrer",
        signal: undefined,
      },
    );
  });

  it("Should render", async () => {
    await waitFor(() => {
      expect(screen.getByText("What is your favorite color?")).toBeTruthy();
    });

    expect(screen.getByText(/Sign Up/)).toBeDefined();

    const password = "123456789";
    const answer = "chocolate";
    const option = 1;
    const passwordInput = screen.getByTestId("password");
    const passwordConfirmationInput = screen.getByTestId("confirm-password");
    const firstSecurityQuestion = screen.getByTestId("first-security-question");
    const secondSecurityQuestion = screen.getByTestId(
      "second-security-question",
    );
    const thirdSecurityQuestion = screen.getByTestId("third-security-question");
    const firstSecurityAnswer = screen.getByTestId("first-security-answer");
    const secondSecurityAnswer = screen.getByTestId("second-security-answer");
    const thirdSecurityAnswer = screen.getByTestId("third-security-answer");
    const submit = screen.getByTestId("submit");

    act(() => {
      userEvent.type(passwordInput, `{backspace}${password}`);
      userEvent.type(passwordConfirmationInput, `{backspace}${password}`);
      userEvent.selectOptions(firstSecurityQuestion, `${1}`);
      userEvent.selectOptions(secondSecurityQuestion, `${1}`);
      userEvent.selectOptions(thirdSecurityQuestion, `${1}`);
      userEvent.type(firstSecurityAnswer, `{backspace}${answer}`);
      userEvent.type(secondSecurityAnswer, `{backspace}${answer}`);
      userEvent.type(thirdSecurityAnswer, `{backspace}${answer}`);
    });
    await act(() => {
      userEvent.click(submit);
    });

    expect(fetch).toHaveBeenLastCalledWith(
      "https://backend-dev.powerfullkids.ca/api/app/user",
      {
        body: `{"province":"","username":"","password":"${password}","firstSecurityQuestionId":"${option}","firstSecurityQuestionAnswer":"${answer}","secondSecurityQuestionId":"${option}","secondSecurityQuestionAnswer":"${answer}","thirdSecurityQuestionId":"${option}","thirdSecurityQuestionAnswer":"${answer}"}`,
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
