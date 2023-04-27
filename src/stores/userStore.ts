import { create } from "zustand";
import { PccServer23SecurityQuestionChoicesGetSecurityQuestionsOutput } from "../lib/api/api";

/**
 * This is a store that contains user data.
 */

/** Minimal representation of user */
export type User = {
  id: string;
};

/* A store that container user/auth/settings data, also includes data for storing avatar choice--but feel free to remove that if its not useful */
export const useUserStore = create<{
  user: User | null;
  setUser: (user: User | null) => void;
  hasCheckedForUserThisSession: boolean;
  usernameForSecurityQuestions: string;
  setUsernameForSecurityQuestions: (username: string) => void;
  forgetType: "username" | "password" | null;
  setForgetType: (forgetParameter: "username" | "password") => void;
  securityQuestions: PccServer23SecurityQuestionChoicesGetSecurityQuestionsOutput;
  setSecurityQuestions: (
    questions: PccServer23SecurityQuestionChoicesGetSecurityQuestionsOutput,
  ) => void;
  firstQuestionAnswer: string;
  setFirstQuestionAnswer: (answer: string) => void;
  secondQuestionAnswer: string;
  setSecondQuestionAnswer: (answer: string) => void;
  thirdQuestionAnswer: string;
  setThirdQuestionAnswer: (answer: string) => void;
}>()((set) => ({
  /** Our User/session object, null if not logged in */
  user: null,
  /** Update user object */
  setUser: (user) => set({ user }),
  /** Whether or not we have called API_getUser this session with our JWT to see if we can resume a persisted auth session */
  hasCheckedForUserThisSession: false,
  usernameForSecurityQuestions: "",
  setUsernameForSecurityQuestions: (username: string) =>
    set({ usernameForSecurityQuestions: username }),
  securityQuestions: {},
  setSecurityQuestions: (
    questions: PccServer23SecurityQuestionChoicesGetSecurityQuestionsOutput,
  ) => set({ securityQuestions: questions }),
  forgetType: null,
  setForgetType: (forgetParameter: "username" | "password") =>
    set({ forgetType: forgetParameter }),
  firstQuestionAnswer: "",
  setFirstQuestionAnswer: (answer: string) =>
    set({ firstQuestionAnswer: answer }),
  secondQuestionAnswer: "",
  setSecondQuestionAnswer: (answer: string) =>
    set({ secondQuestionAnswer: answer }),
  thirdQuestionAnswer: "",
  setThirdQuestionAnswer: (answer: string) =>
    set({ thirdQuestionAnswer: answer }),
}));

// Imperative getter/setter/computed-value functions

/**
 * Imperative
 * @returns The current user object, or null if not logged in
 */
export const getUser = () => useUserStore.getState().user;
/**
 * Imperatively set the user object
 */
export const setUser = (user: User | null) => useUserStore.setState({ user });
/**
 * Imperatively set whether or not we have checked for a user this session
 */
export const setHasCheckedForUserThisSession = (val = true) =>
  useUserStore.setState({ hasCheckedForUserThisSession: val });

/**
 * Impreatively get whether or not we have checked for a user this session
 */
export const getHasCheckedForUserThisSession = () =>
  useUserStore.getState().hasCheckedForUserThisSession;

// Declarative react hooks

/**
 * Get user data in react component
 */
export const useUser = () => {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  return {
    user,
    setUser,
  };
};
