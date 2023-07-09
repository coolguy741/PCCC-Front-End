import { createContext, useState } from "react";
export const patternArray = [
  "grapes",
  "apples",
  "lemons",
  "oranges",
  "yellows",
];

interface State {
  pattern: number;
  shufflePattern: () => void;
}

const initialState: State = {
  pattern: 0,
  shufflePattern: () => undefined,
};

export const PatternContext = createContext<State>(initialState);

export function PatternProvider() {
  const [currentPattern, setPattern] = useState<number>(0);
  const maxLength = patternArray.length - 1;

  function shuffleImage() {
    console.log("firing");
    if (currentPattern >= maxLength) setPattern(0);
    else setPattern((prevState) => prevState++);
  }

  const value = { currentPattern, shuffleImage };
}
