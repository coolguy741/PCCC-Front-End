import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import fetch from "node-fetch";
import { act } from "react-dom/test-utils";
import { afterEach, expect } from "vitest";
import { create as actualCreate } from "zustand";

global.fetch = fetch;
expect.extend(matchers);

const storeResetFns = new Set();
export const create = (createState) => {
  const store = actualCreate(createState);
  const initialState = store.getState();
  storeResetFns.add(() => store.setState(initialState, true));
  return store;
};

beforeEach(() => {
  act(() => storeResetFns.forEach((resetFn) => resetFn()));
});

afterEach(() => {
  cleanup();
});
