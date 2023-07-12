import { useState } from "react";
export const patternArray = [
  "grapes",
  "apples",
  "lemons",
  "oranges",
  "yellows",
];

export function usePatterns() {
  const [currentPattern, setCurrentPattern] = useState(0);
  const patternLength = patternArray.length;

  function shufflePattern() {
    if (currentPattern !== patternLength - 1)
      setCurrentPattern((prevState) => prevState++);
    else setCurrentPattern(0);
  }

  console.log(currentPattern);

  return { currentPattern, shufflePattern };
}
