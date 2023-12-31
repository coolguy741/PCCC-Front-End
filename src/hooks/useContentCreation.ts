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

  function changeEditState(
    tag: TitleType,
    amtOrIngdt?: "amt" | "ingdt",
    sIndex?: number,
    cIndex?: number,
  ) {
    const newState = {
      ...state,
      [tag]: {
        ...state[tag],
        mode:
          state[tag].mode === ComponentViewMode.EDIT
            ? ComponentViewMode.VIEW
            : ComponentViewMode.EDIT,
      },
    };
    componentPosition &&
      updatePageState &&
      updatePageState(
        sIndex ?? componentPosition.slideIndex,
        cIndex ?? componentPosition.componentIndex,
        newState,
      );
    return setState(newState);
  }

  function changeListEditState(
    index: number,
    amtOrIngdt?: "amt" | "ingdt",
    sIndex?: number,
    cIndex?: number,
  ) {
    const newState = alterArrayContentState(state, index, {
      ...state[index],
      [!amtOrIngdt ? "mode" : amtOrIngdt === "amt" ? "aMode" : "iMode"]:
        state[index].mode === ComponentViewMode.EDIT
          ? ComponentViewMode.VIEW
          : ComponentViewMode.EDIT,
    });

    componentPosition &&
      updatePageState &&
      updatePageState(
        sIndex ?? componentPosition.slideIndex,
        cIndex ?? componentPosition.componentIndex,
        newState,
      );
    return setState(newState);
  }

  function changeMediaState(
    mediaSrc: string,
    mediaName: string,
    sIndex?: number,
    cIndex?: number,
  ) {
    const media = { ...state.media, src: mediaSrc, name: mediaName };
    const newState = {
      ...state,
      media: media,
    };
    componentPosition &&
      updatePageState &&
      updatePageState(
        sIndex ?? componentPosition.slideIndex,
        cIndex ?? componentPosition.componentIndex,
        newState,
      );
    return setState(newState);
  }

  function changeMediaPattern(
    pattern: number,
    sIndex?: number,
    cIndex?: number,
  ) {
    console.log(pattern, sIndex, cIndex);

    const media = { src: "", name: "", thumbnail: "", patternChoice: pattern };
    const newState = {
      ...state,
      media: media,
    };

    componentPosition &&
      updatePageState &&
      updatePageState(
        sIndex ?? componentPosition.slideIndex,
        cIndex ?? componentPosition.componentIndex,
        newState,
      );
    return setState(newState);
  }

  function addThumbnail(mediaSrc: string) {
    const media = { ...state.media, thumbnail: mediaSrc };
    const newState = {
      ...state,
      media: media,
    };
    return setState(newState);
  }

  function changeTimelineEditState(tag: TitleType) {
    const newState = {
      ...timelineState,
      [tag]: {
        ...timelineState[tag],
        mode:
          timelineState[tag].mode === ComponentViewMode.EDIT
            ? ComponentViewMode.VIEW
            : ComponentViewMode.EDIT,
      },
    };

    componentPosition &&
      updatePageState &&
      updatePageState(
        componentPosition.slideIndex,
        componentPosition.componentIndex,
        newState,
      );
    setTimelineState(newState);
  }

  function changeListText(
    index: number,
    newText: string,
    amtOrIngdt?: "amt" | "ingdt",
    sIndex?: number,
    cIndex?: number,
  ) {
    const newState = alterArrayContentState(state, index, {
      ...state[index],
      [amtOrIngdt ?? "text"]: newText,
    });

    componentPosition &&
      updatePageState &&
      updatePageState(
        sIndex ?? componentPosition.slideIndex,
        cIndex ?? componentPosition.componentIndex,
        newState,
      );
    setState(newState);
  }

  function changeText(
    name: TitleType,
    newText: string,
    amtOrIngdt?: "amt" | "ingdt",
    sIndex?: number,
    cIndex?: number,
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
        sIndex ?? componentPosition.slideIndex,
        cIndex ?? componentPosition.componentIndex,
        newState,
      );
    setState(newState);
  }

  function changeValid(
    name: TitleType,
    value: boolean,
    amtOrIngdt?: "amt" | "ingdt",
    sIndex?: number,
    cIndex?: number,
  ) {
    const newState = {
      ...state,
      [name]: {
        ...state[name],
        valid: value,
      },
    };
    componentPosition &&
      updatePageState &&
      updatePageState(
        sIndex ?? componentPosition.slideIndex,
        cIndex ?? componentPosition.componentIndex,
        newState,
      );
    setState(newState);
  }

  function changeOption(
    value: boolean,
    amtOrIngdt?: "amt" | "ingdt",
    sIndex?: number,
    cIndex?: number,
  ) {
    const newState = {
      ...state,
      option: {
        ...state.option,
        value,
      },
    };
    componentPosition &&
      updatePageState &&
      updatePageState(
        sIndex ?? componentPosition.slideIndex,
        cIndex ?? componentPosition.componentIndex,
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
    setTimelineState(newState);
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
    const timeline = Object.values(initialState)
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
  }, [initialState]);

  return {
    state,
    changeEditState,
    changeText,
    changeValid,
    changeOption,
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
    changeMediaPattern,
    addThumbnail,
  };
}
