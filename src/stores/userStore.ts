import { create } from "zustand";
import {
  PccServer23GroupsCustomGroupUserJoinRequestDto,
  PccServer23SecurityQuestionChoicesGetSecurityQuestionsOutput,
  PccServer23UsersGetUserProfileDto,
} from "../lib/api/api";

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
