import { create } from "zustand";
import {
  PccServer23GroupsCustomGroupUserJoinRequestDto,
  PccServer23SecurityQuestionChoicesGetSecurityQuestionsOutput,
  PccServer23UsersGetUserProfileDto,
} from "../lib/api/api";
import { getAuthenticatedUser } from "../lib/api/helpers/getAuthenticatedUser";

export const useUserStore = create<{
  user: PccServer23UsersGetUserProfileDto | null;
  setUser: (user: PccServer23UsersGetUserProfileDto | null) => void;
  groupInvitations:
    | PccServer23GroupsCustomGroupUserJoinRequestDto[]
    | undefined
    | null;
  setGroupInvitations: (
    invitations:
      | PccServer23GroupsCustomGroupUserJoinRequestDto[]
      | undefined
      | null,
  ) => void;
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
  firstQuestionId: string;
  setFirstQuestionId: (answer: string) => void;
  secondQuestionId: string;
  setSecondQuestionId: (answer: string) => void;
  thirdQuestionId: string;
  setThirdQuestionId: (answer: string) => void;
  hasCheckedForUserThisSession: boolean;
}>()((set) => ({
  /** Our User/session object, null if not logged in */
  user: null,
  /** Update user object */
  setUser: (user) => set({ user }),
  groupInvitations: [],
  setGroupInvitations: (invitations) => set({ groupInvitations: invitations }),
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
  firstQuestionId: "",
  setFirstQuestionId: (id: string) => set({ firstQuestionId: id }),
  secondQuestionId: "",
  setSecondQuestionId: (id: string) => set({ secondQuestionId: id }),
  thirdQuestionId: "",
  setThirdQuestionId: (id: string) => set({ thirdQuestionId: id }),
  hasCheckedForUserThisSession: false,
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
export const setUser = (user: PccServer23UsersGetUserProfileDto | null) =>
  useUserStore.setState({ user });

/**
 * Imperatively set the group invitations
 */
export const setGroupInvitations = (
  groupInvitations:
    | PccServer23GroupsCustomGroupUserJoinRequestDto[]
    | undefined
    | null,
) => useUserStore.setState({ groupInvitations });

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

export const getHasCheckedForUserThisSession = () =>
  useUserStore.getState().hasCheckedForUserThisSession;

export const setHasCheckedForUserThisSession = (val: true) =>
  useUserStore.setState({ hasCheckedForUserThisSession: val });

/**
 * This is an imperative function that will fetch the user if we have not already done so this session.
 * @returns User | null
 */
export const getUserOrFetchUserIfFirstLoad = async () => {
  // See if the store already has a user
  let user = getUser();

  // If not, and if we haven't checked this session
  if (!user && !getHasCheckedForUserThisSession()) {
    // Try to get a user.  If this worked, it will populate the userStore.
    try {
      await getAuthenticatedUser();
    } catch (err) {
      console.warn("Failed to fetch user on page load", err);
    }

    // We have checked for the user, so we shouldn't use this approach to check again--this session.
    setHasCheckedForUserThisSession(true);

    // Get the user from the store (might be null still, but maybe we got a user!)
    user = getUser();
  }
  return user;
};
