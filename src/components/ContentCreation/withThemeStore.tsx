import { ComponentType, useCallback, useEffect } from "react";

import { useContentCreation } from "../../hooks/useContentCreation";
import {
  ComponentViewMode,
  State,
  ThemeComponentProps,
  TitleType,
} from "./types";

export type ComponentProps = {
  viewMode: (mode: ComponentViewMode) => ComponentViewMode;
  state: State;
  changeText: (name: TitleType, newText: string) => void;
  changeEditState: (tag: TitleType) => void;
};

export function withThemeStore<P extends ThemeComponentProps>(
  Component: ComponentType<P & ComponentProps>,
  initialState: State,
) {
  return function (props: P) {
    const {
      componentIndex,
      componentState,
      slideIndex,
      isEditable,
      updatePageState,
    } = props;
    const { setComponentPosition, state, changeEditState, changeText } =
      useContentCreation(componentState ?? initialState, updatePageState);

    useEffect(() => {
      if (slideIndex !== undefined && componentIndex !== undefined) {
        setComponentPosition({
          slideIndex,
          componentIndex,
        });
      }
    }, [slideIndex, componentIndex, setComponentPosition]);

    const viewMode = useCallback(
      (stateMode: ComponentViewMode) =>
        isEditable ? stateMode : ComponentViewMode.VIEW,
      [isEditable],
    );

    return (
      <Component
        {...props}
        state={state}
        changeEditState={changeEditState}
        changeText={changeText}
        viewMode={viewMode}
      />
    );
  };
}
