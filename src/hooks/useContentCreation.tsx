import { useState } from "react";
import { useLocation } from "react-router-dom";

import {
  CCFormat,
  State,
  TitleType,
} from "../components/ContentCreation/types";
import { useThemeStore } from "../stores/themeStore";

export function useContentCreation(initialState: State) {
  const [state, setState] = useState<State>(initialState);
  const [componentPosition, setComponentPosition] =
    useState<{ slideIndex: number; componentIndex: number }>();
  const { updatePageState } = useThemeStore();
  const { pathname } = useLocation();

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
      if (!pathname.endsWith("preview")) {
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
  }

  function changeText(name: TitleType, newText: string) {
    const newState = {
      ...state,
      [name]: {
        ...state[name],
        text: newText,
      },
    };
    componentPosition &&
      updatePageState(
        componentPosition.slideIndex,
        componentPosition.componentIndex,
        newState,
      );
    setState(newState);
  }

  function deleteListItem(name: any) {
    let stateCopy = [...(state as unknown as CCFormat[])];
    delete stateCopy[name];

    // delete leaves an "empty" value in the array
    // removed with filter
    stateCopy = stateCopy.filter(Boolean);

    setState(stateCopy as unknown as State);
  }

  function addListItem() {
    const newState = [
      ...(state as unknown as CCFormat[]),
      {
        mode: "view",
        text: "click to edit",
      },
    ];
    setState(newState as unknown as State);
  }

  return {
    state,
    changeEditState,
    changeText,
    deleteListItem,
    addListItem,
    setComponentPosition,
  };
}
