import { useState } from "react";
import { State, TitleType } from "../components/ContentCreation/types";

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

  function deleteText(name: any, text: string) {
    console.log(name, state, text);
  }

  return { state, changeEditState, changeText, deleteText };
}
