import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import { Mock, vi } from "vitest";

import { cleanup, render, screen, waitFor } from "../../../lib/util/test-utils";
import { useSignUpStore } from "../../../stores/signUpStore";
import { SignUpForm } from "../SignUpForm";

describe("SignUpForm", async () => {
  const initialState = useSignUpStore.getState();

  beforeEach(() => {
    useSignUpStore.setState(initialState, true);
    cleanup();

    vi.spyOn(global, "fetch").mockImplementation(
      vi.fn(async () => ({
        ok: true,
        json: async () => ({
          firstNames: ["Awesome", "Cool", "Funny"],
          secondNames: ["Apple", "Carrot", "Orange"],
        }),
      })) as Mock,
    );
    render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>,
    );
  });

  it("Should load usernames", async () => {
    expect(fetch).toHaveBeenCalledWith(
      "https://backend-dev.powerfullkids.ca/api/app/custom-username-choices/username-choices",
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

  it("Should render without crash when the user is not a coordinator", async () => {
    await waitFor(() => {
      expect(screen.getByText("Awesome")).toBeTruthy();
    });

    expect(screen.getByText("Sign Up")).toBeTruthy();
    expect(screen.getByTestId("year")).toBeTruthy();
    expect(screen.getByTestId("month")).toBeTruthy();
    expect(screen.getByTestId("day")).toBeTruthy();
    expect(screen.getByTestId("province")).toBeTruthy();
    expect(screen.getByTestId("submit")).toBeTruthy();
  });

  it("Should render without crash when the user is a coordinator", async () => {
    act(() => {
      useSignUpStore.setState({ ...initialState, isCoordinator: true }, true);
    });

    expect(screen.getByLabelText(/name/i)).toBeTruthy();
    expect(screen.getByLabelText(/email/i)).toBeTruthy();
    expect(screen.getByLabelText(/title/i)).toBeTruthy();
    expect(screen.getByTestId("school-code")).toBeTruthy();
    expect(screen.getByTestId("school-name")).toBeTruthy();
  });
});
