import { useState } from "react";
import { TitleType } from "../Title";
import { CCFormat } from "../types";

type State = Record<TitleType, CCFormat>;

export function useContentCreation(initialState: State) {
  const [state, setState] = useState<State>(initialState);

  function changeEditState(tag: TitleType) {
    if (state[tag].mode === "edit") {
      const newState = {
        ...state,
        [tag]: {
          ...state[tag],
          mode: "view",
        },
      };
      setState(newState);
    } else {
      const newState = {
        ...state,
        [tag]: {
          ...state[tag],
          mode: "edit",
        },
      };
      setState(newState);
    }
  }

  function changeText(name: TitleType, newText: string) {
    const newState = {
      ...state,
      [name]: {
        ...state[name],
        text: newText,
      },
    };
    setState(newState);
  }

  return { state, changeEditState, changeText };
}
