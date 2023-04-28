import { Cookies } from "react-cookie";
import { act } from "react-dom/test-utils";
import * as router from "react-router";
import { MemoryRouter } from "react-router-dom";
import { Mock, vi } from "vitest";

import {
  render,
  screen,
  userEvent,
  waitFor,
} from "../../../lib/util/test-utils";
import { STORAGE_KEY_JWT } from "../../../pages/consts";
import { useUserStore } from "../../../stores/userStore";
import { SignInForm } from "../SignInForm";

const navigate = vi.fn();

describe("Sign in form", async () => {
  beforeEach(() => {
    vi.spyOn(router, "useNavigate").mockImplementation(() => navigate);

    render(
      <MemoryRouter>
        <SignInForm />
      </MemoryRouter>,
    );
  });

  it("Should render without crash", async () => {
    expect(screen.getByText(/log in/i)).toBeTruthy();
    expect(screen.getByLabelText(/username/i)).toBeTruthy();
    expect(screen.getByLabelText(/password/i)).toBeTruthy();
    expect(screen.getByTestId("forgot-username")).toBeTruthy();
    expect(screen.getByTestId("forgot-password")).toBeTruthy();
    expect(screen.getByTestId("submit")).toBeTruthy();
  });

  it("Should redirect to forgot username when clicking 'forgot username'", async () => {
    const forgotUsername = screen.getByTestId("forgot-username");

    act(() => {
      userEvent.click(forgotUsername);
    });

    const { forgetType } = useUserStore.getState();

    expect(forgetType).toBe("username");
    expect(navigate).toHaveBeenCalledWith("forgot-password");
  });

  it("Should redirect to forgot password when clicking 'forgot password'", async () => {
    const forgotPassword = screen.getByTestId("forgot-password");

    act(() => {
      userEvent.click(forgotPassword);
    });
    const { forgetType } = useUserStore.getState();

    expect(forgetType).toBe("password");
    expect(navigate).toHaveBeenCalledWith("forgot-password");
  });

  it("Should send the request with the username and password", async () => {
    const token = "access token";
    const username = "jenkins";
    const password = "jenkins";
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submit = screen.getByTestId("submit");

    vi.spyOn(global, "fetch").mockImplementation(
      vi.fn(async () => ({
        ok: true,
        json: async () => ({
          access_token: token,
          token_type: "Bearer",
          expires_in: 3600,
        }),
      })) as Mock,
    );

    act(() => {
      userEvent.type(usernameInput, `{backspace}${username}`);
      userEvent.type(passwordInput, `{backspace}${password}`);
      userEvent.click(submit);
    });
    expect(fetch).toHaveBeenCalledWith(
      "https://backend-dev.powerfullkids.ca/connect/token",
      {
        body: "username=jenkins&password=jenkins&grant_type=password&client_id=PccServer23_Web",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
        redirect: "follow",
        referrerPolicy: "no-referrer",
        signal: undefined,
      },
    );
    await waitFor(async () => {
      expect(new Cookies().get(STORAGE_KEY_JWT)).toBe(token);
    });
  });
});
