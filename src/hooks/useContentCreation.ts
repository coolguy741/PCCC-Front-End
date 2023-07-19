import { useEffect, useState } from "react";

import {
  CCFormat,
  ComponentViewMode,
  State,
  TitleType,
} from "../components/ContentCreation/types";

function alterArrayContentState(state: any, idx: number, indexValue: number) {
  const stateCopy = state.map((s: any, index: number) =>
    index === idx ? indexValue : s,
  );
  return stateCopy;
}

export function useContentCreation(
  initialState: any,
  updatePageState?: (slideIndex: number, index: number, state: State) => void,
) {
  const [state, setState] = useState<any>(initialState);
  const [timelineState, setTimelineState] = useState<any>(initialState);
  const [componentPosition, setComponentPosition] =
    useState<{ slideIndex: number; componentIndex: number }>();

  useEffect(() => {
    initialState && setState(initialState);
  }, [initialState]);

  function changeEditState(tag: TitleType, amtOrIngdt?: "amt" | "ingdt") {
    if (state[tag].mode === ComponentViewMode.EDIT) {
      const newState = {
        ...state,
        [tag]: {
          ...state[tag],
          mode: ComponentViewMode.VIEW,
        },
      };
      return setState(newState);
    } else {
      const newState = {
        ...state,
        [tag]: {
          ...state[tag],
          mode: ComponentViewMode.EDIT,
        },
      };
      return setState(newState);
    }
  }

  function changeListEditState(index: number, amtOrIngdt?: "amt" | "ingdt") {
    if (amtOrIngdt) {
      if (amtOrIngdt === "amt") {
        if (state[index].aMode === ComponentViewMode.VIEW) {
          const indexValue = { ...state[index], aMode: ComponentViewMode.EDIT };
          return setState(alterArrayContentState(state, index, indexValue));
        } else {
          const indexValue = { ...state[index], aMode: ComponentViewMode.VIEW };
          return setState(alterArrayContentState(state, index, indexValue));
        }
      } else {
        if (state[index].iMode === ComponentViewMode.VIEW) {
          const indexValue = { ...state[index], iMode: ComponentViewMode.EDIT };
          return setState(alterArrayContentState(state, index, indexValue));
        } else {
          const indexValue = { ...state[index], iMode: ComponentViewMode.VIEW };
          return setState(alterArrayContentState(state, index, indexValue));
        }
      }
    }

    if (state[index].mode === ComponentViewMode.EDIT) {
      const indexValue = { ...state[index], mode: ComponentViewMode.VIEW };
      return setState(alterArrayContentState(state, index, indexValue));
    } else {
      const indexValue = { ...state[index], mode: ComponentViewMode.EDIT };
      return setState(alterArrayContentState(state, index, indexValue));
    }
  }

  function changeMediaState(mediaName: string) {
    const media = { ...state.media, src: mediaName };
    const newState = {
      ...state,
      media: media,
    };
    return setState(newState);
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

  function changeListText(
    index: number,
    newText: string,
    amtOrIngdt?: "amt" | "ingdt",
  ) {
    let newState;
    if (amtOrIngdt) {
      const indexValue = { ...state[index], [amtOrIngdt]: newText };
      newState = alterArrayContentState(state, index, indexValue);
    } else {
      const indexValue = { ...state[index], text: newText };
      newState = alterArrayContentState(state, index, indexValue);
    }

    componentPosition &&
      updatePageState &&
      updatePageState(
        componentPosition.slideIndex,
        componentPosition.componentIndex,
        newState,
      );
    setState(newState);
  }

  function changeText(
    name: TitleType,
    newText: string,
    amtOrIngdt?: "amt" | "ingdt",
  ) {
    let newState;
    if (amtOrIngdt) {
      newState = {
        ...state,
        [name]: {
          ...state[name],
          [amtOrIngdt]: newText,
        },
      };
    } else {
      newState = {
        ...state,
        [name]: {
          ...state[name],
          text: newText,
        },
      };
    }
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

  function deleteListItem() {
    let stateCopy = [...(state as unknown as CCFormat[])];
    delete stateCopy[stateCopy.length - 1];

    // delete leaves an "empty" value in the array
    // removed with filter
    stateCopy = stateCopy.filter(Boolean);
    setState(stateCopy as unknown as State);
  }

  function addListItem(amtOrIngdt?: boolean) {
    let newState;
    if (amtOrIngdt) {
      newState = [
        ...(state as unknown as CCFormat[]),
        {
          aMode: ComponentViewMode.VIEW,
          iMode: ComponentViewMode.VIEW,
          amt: "Click to edit",
          ingdt: "Click to edit",
        },
      ];
      return setState(newState as unknown as State);
    }

    newState = [
      ...(state as unknown as CCFormat[]),
      {
        mode: ComponentViewMode.VIEW,
        text: "click to edit",
      },
    ];
    return setState(newState as unknown as State);
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
          mode: (value as any).mode,
          text: (value as any).text,
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
    changeListEditState,
    changeListText,
    changeMediaState,
  };
}
