import { MemoryRouter } from "react-router-dom";

import { render, screen } from "../../../lib/util/test-utils";
import { IncorrectSecurityAnswers } from "../IncorrectSecurityAnswers/incorrectSecurityAnswers";

describe("IncorrectSecurityAnswers", async () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <IncorrectSecurityAnswers />
      </MemoryRouter>,
    );
  });

  it("Should render without crash", async () => {
    expect(screen.getByText(/Incorrect Security Answers/i)).toBeTruthy();
  });
});
