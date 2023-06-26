import { useState } from "react";
import { TitleType } from "../components/ContentCreation/types";

export function useContentCreation(initialState: any) {
  const [state, setState] = useState<any>(initialState);

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

  function deleteListItem(name: any) {
    let stateCopy = [...state];
    delete stateCopy[name];

    // delete leaves an "empty" value in the array
    // removed with filter
    stateCopy = stateCopy.filter(Boolean);

    setState(stateCopy);
  }

  function addListItem() {
    const newState = [
      ...state,
      {
        mode: "view",
        text: "click to edit",
      },
    ];
    setState(newState);
  }

  return { state, changeEditState, changeText, deleteListItem, addListItem };
}
