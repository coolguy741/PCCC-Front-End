import { useEffect, useState } from "react";

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
  const [timelineState, setTimelineState] = useState<State>(initialState);
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

  function changeTimelineEditState(tag: TitleType) {
    if (timelineState[tag].mode === ComponentViewMode.EDIT) {
      console.log("VIEW FIRE");

      const newState = {
        ...timelineState,
        [tag]: {
          ...timelineState[tag],
          mode: ComponentViewMode.VIEW,
        },
      };
      setTimelineState(newState);
    } else {
      console.log("EDIT FIRE");

      const newState = {
        ...timelineState,
        [tag]: {
          ...timelineState[tag],
          mode: ComponentViewMode.EDIT,
        },
      };
      setTimelineState(newState);
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

  function timelineChangeText(name: TitleType, newText: string) {
    const newState = {
      ...timelineState,
      [name]: {
        ...timelineState[name],
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

  useEffect(() => {
    const timeline = Object.values(state)
      .map((value) => {
        return {
          mode: value.mode,
          text: value.text,
        };
      })
      .reduce(
        (acc, curr, index) => ({
          ...acc,
          [`stop${index}`]: { mode: curr.mode, text: curr.text },
        }),
        [],
      );

    setTimelineState(timeline as unknown as State);
  }, [state]);

  return {
    state,
    changeEditState,
    changeText,
    deleteListItem,
    addListItem,
    setComponentPosition,
    addTimelineStop,
    timelineState,
    changeTimelineEditState,
    timelineChangeText,
  };
}
