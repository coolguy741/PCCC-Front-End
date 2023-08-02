import { useRef } from "react";

const useCCCButtonsData = () => {
  // Data
  const cccButtonData = [
    {
      id: 0,
      rotation: 10,
      name: "all",
      content: "All",
      ref: useRef<HTMLButtonElement | null>(null),
    },
    {
      id: 1,
      rotation: -10,
      name: "confident",
      content: "Confident",
      ref: useRef<HTMLButtonElement | null>(null),
    },
    {
      id: 2,
      rotation: 10,
      name: "clean",
      content: "Clean",
      ref: useRef<HTMLButtonElement | null>(null),
    },
    {
      id: 3,
      rotation: -10,
      name: "careful",
      content: "Careful",
      ref: useRef<HTMLButtonElement | null>(null),
    },
  ];
  return { cccButtonData };
};

export { useCCCButtonsData };
