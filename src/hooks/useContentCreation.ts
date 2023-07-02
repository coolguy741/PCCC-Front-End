import { useState } from "react";

import {
  CCFormat,
  ComponentViewMode,
  State,
  TitleType,
} from "../components/ContentCreation/types";

export function useContentCreation(
  initialState: State,
  updatePageState?: (slideIndex: number, index: number, state: State) => void,
) {
  const [state, setState] = useState<State>(initialState);
  const [componentPosition, setComponentPosition] =
    useState<{ slideIndex: number; componentIndex: number }>();

  function changeEditState(tag: TitleType) {
    if (state[tag].mode === ComponentViewMode.EDIT) {
      const newState = {
        ...state,
        [tag]: {
          ...state[tag],
          mode: ComponentViewMode.VIEW,
        },
      };
      setState(newState);
    } else {
      const newState = {
        ...state,
        [tag]: {
          ...state[tag],
          mode: ComponentViewMode.EDIT,
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
    componentPosition &&
      updatePageState &&
      updatePageState(
        componentPosition.slideIndex,
        componentPosition.componentIndex,
        newState,
      );
    setState(newState);
  }

  function deleteListItem() {
    let stateCopy = [...(state as unknown as CCFormat[])];
    delete stateCopy[stateCopy.length - 1];

    // delete leaves an "empty" value in the array
    // removed with filter
    stateCopy = stateCopy.filter(Boolean);

    setState(stateCopy as unknown as State);
  }

  function addListItem() {
    const newState = [
      ...(state as unknown as CCFormat[]),
      {
        mode: ComponentViewMode.VIEW,
        text: "click to edit",
      },
    ];
    setState(newState as unknown as State);
  }

  function addTimelineStop(name: string) {
    const newState = {
      ...state,
      [name]: {
        mode: "view",
        text: "Edit",
      },
    };
    setState(newState);
  }

  return {
    state,
    changeEditState,
    changeText,
    deleteListItem,
    addListItem,
    setComponentPosition,
    addTimelineStop,
  };
}
