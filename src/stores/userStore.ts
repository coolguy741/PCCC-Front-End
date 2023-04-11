import create from 'zustand';
import { API_getUser } from '../lib/api/api';

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
  hasCheckedForUserThisSession: boolean;
  setUser: (user: User | null) => void;
}>((set) => ({
  /** Our User/session object, null if not logged in */
  user: null,
  /** Update user object */
  setUser: (user) => set({ user }),
  /** Whether or not we have called API_getUser this session with our JWT to see if we can resume a persisted auth session */
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
export const setUser = (user: User | null) => useUserStore.setState({ user });
/**
 * Imperatively set whether or not we have checked for a user this session
 */
export const setHasCheckedForUserThisSession = (val: boolean = true) =>
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
      await API_getUser();
    } catch (err) {
      console.warn('Failed to fetch user on page load', err);
    }

    // We have checked for the user, so we shouldn't use this approach to check again--this session.
    setHasCheckedForUserThisSession();

    // Get the user from the store (might be null still, but maybe we got a user!)
    user = getUser();
  }
  return user;
};
