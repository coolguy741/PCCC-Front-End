import { MemoryRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import { render, screen } from "../../../lib/util/test-utils";
import { SecurityQuestions } from "../SecurityQuestions";

describe("Sign up form", async () => {
  test("Should render", async () => {
    render(
      <MemoryRouter>
        <SecurityQuestions />
      </MemoryRouter>,
    );

    expect(screen.getByText(/Sign Up/)).toBeDefined();
  });
});
