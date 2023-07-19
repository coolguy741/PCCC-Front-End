import { ComponentType, useCallback, useEffect } from "react";

import { useContentCreation } from "../../hooks/useContentCreation";
import { ComponentViewMode, ThemeComponentProps, TitleType } from "./types";

export type ComponentProps = {
  viewMode: (mode: ComponentViewMode) => ComponentViewMode;
  state: any;
  changeText: (name: TitleType, newText: string) => void;
  changeEditState: (tag: TitleType) => void;
  changeListEditState: (index: number, amtOrIngdt?: "amt" | "ingdt") => void;
  changeListText: (
    index: number,
    newText: string,
    amtOrIngdt?: "amt" | "ingdt",
  ) => void;
  deleteListItem: () => void;
  addListItem: (amtOrIngdt?: boolean) => void;
  changeMediaState: (name: string) => void;
  changeMediaPattern: (pattern: number) => void;
};

export function withThemeStore<P extends ThemeComponentProps>(
  Component: ComponentType<P & ComponentProps>,
  initialState: any,
) {
  return function (props: P) {
    const {
      componentIndex,
      state: componentState,
      slideIndex,
      isEditable,
      updatePageState,
    } = props;
    const {
      setComponentPosition,
      state,
      changeEditState,
      changeText,
      changeListEditState,
      changeListText,
      deleteListItem,
      addListItem,
      changeMediaState,
      changeMediaPattern,
    } = useContentCreation(componentState ?? initialState, updatePageState);

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

    const handleChangeEditState = useCallback(
      (tag: any) => {
        changeEditState(tag, undefined, slideIndex, componentIndex);
      },
      [slideIndex, componentIndex, changeEditState],
    );

    const handleChangeText = useCallback(
      (name: TitleType, newText: string) => {
        changeText(name, newText, undefined, slideIndex, componentIndex);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [handleChangeEditState],
    );

    return (
      <Component
        {...props}
        state={state}
        changeEditState={handleChangeEditState}
        changeText={handleChangeText}
        viewMode={viewMode}
        changeListEditState={changeListEditState}
        changeListText={changeListText}
        deleteListItem={deleteListItem}
        addListItem={addListItem}
        changeMediaState={changeMediaState}
        changeMediaPattern={changeMediaPattern}
      />
    );
  };
}
