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

    const handleChangeListEditState = useCallback(
      (index: number, amtOrIngdt?: "amt" | "ingdt") => {
        changeListEditState(index, amtOrIngdt, slideIndex, componentIndex);
      },
      [slideIndex, componentIndex, changeListEditState],
    );

    const handleChangeText = useCallback(
      (name: TitleType, newText: string) => {
        changeText(name, newText, undefined, slideIndex, componentIndex);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [handleChangeEditState],
    );

    const handleChangeListText = useCallback(
      (index: number, newText: string, amtOrIngdt?: "amt" | "ingdt") => {
        changeListText(index, newText, amtOrIngdt, slideIndex, componentIndex);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [handleChangeListEditState],
    );

    const handleChangeMediaState = useCallback(
      (name: string) => {
        changeMediaState(name, slideIndex, componentIndex);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [slideIndex, componentIndex, changeMediaState],
    );

    const handleChangeMediaPattern = useCallback(
      (pattern: number) => {
        changeMediaPattern(pattern, slideIndex, componentIndex);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [slideIndex, componentIndex, changeMediaPattern],
    );

    return (
      <Component
        {...props}
        state={state}
        changeEditState={handleChangeEditState}
        changeText={handleChangeText}
        viewMode={viewMode}
        changeListEditState={handleChangeListEditState}
        changeListText={handleChangeListText}
        deleteListItem={deleteListItem}
        addListItem={addListItem}
        changeMediaState={handleChangeMediaState}
        changeMediaPattern={handleChangeMediaPattern}
      />
    );
  };
}
