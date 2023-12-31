import { useState } from "react";
export const patternArray = [
  "grapes",
  "apples",
  "lemons",
  "oranges",
  "yellows",
];

export function usePatterns(
  patternChoice?: number,
  chanFunc?: (pattern: number) => void,
) {
  const [currentPattern, setCurrentPattern] = useState(
    patternChoice ?? Math.floor(Math.random() * 5),
  );
  const patternLength = patternArray.length;

  function shufflePattern() {
    if (currentPattern !== patternLength - 1) {
      setCurrentPattern(currentPattern + 1);
      chanFunc && chanFunc(currentPattern + 1);
    } else {
      setCurrentPattern(0);
      chanFunc && chanFunc(0);
    }
  }

  return { currentPattern, shufflePattern };
}
