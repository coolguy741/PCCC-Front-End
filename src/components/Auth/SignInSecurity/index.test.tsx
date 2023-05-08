import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";

import { render, screen, userEvent } from "../../../lib/util/test-utils";
import { useSignInStore } from "../../../stores/signInStore";
import { useUserStore } from "../../../stores/userStore";
import { SignInSecurity } from "../SignInSecurity/signInSecurity";

describe("SignInSecurity", async () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <SignInSecurity />
      </MemoryRouter>,
    );
  });

  it("Should render without crash", async () => {
    expect(screen.getByText("Security questions")).toBeTruthy();
    expect(screen.getByTestId("answer-1")).toBeTruthy();
    expect(screen.getByTestId("answer-2")).toBeTruthy();
    expect(screen.getByTestId("answer-3")).toBeTruthy();
    expect(screen.getByTestId("submit")).toBeTruthy();
  });

  it("Should set the answers and step 2", async () => {
    const answer1 = "answer1";
    const answer2 = "answer2";
    const answer3 = "answer3";
    const answerInput1 = screen.getByTestId("answer-1");
    const answerInput2 = screen.getByTestId("answer-2");
    const answerInput3 = screen.getByTestId("answer-3");
    const submit = screen.getByTestId("submit");

    await act(() => {
      userEvent.type(answerInput1, `{backspace}${answer1}`);
      userEvent.type(answerInput2, `{backspace}${answer2}`);
      userEvent.type(answerInput3, `{backspace}${answer3}`);
      userEvent.click(submit);
    });

    const { currentStep } = useSignInStore.getState();
    const { firstQuestionAnswer, secondQuestionAnswer, thirdQuestionAnswer } =
      useUserStore.getState();

    expect(currentStep).toBe(2);
    expect(firstQuestionAnswer).toBe(answer1);
    expect(secondQuestionAnswer).toBe(answer2);
    expect(thirdQuestionAnswer).toBe(answer3);
  });
});
