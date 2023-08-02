import { FC, memo, MouseEvent, useCallback, useEffect, useState } from "react";
import { shallow } from "zustand/shallow";
import { AchievmentsCCCTypes } from "../../../../../globalState/modules/AchievementModule/AchievementModuleTypes";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";
import { animCCCButton } from "./CCCButtonsAnimations";
import CCCButtonStyleContainer from "./CCCButtonsStyleContainer";
import { useCCCButtonsData } from "./useCCCButtonsData";

const CCCButtons: FC = () => {
  // Local State
  const [cccButtonsInitialized, setCccButtonsInitialized] =
    useState<boolean>(false);

  // Global State
  const { activeCCC, setActiveCCC } = useGlobalState(
    (state) => ({
      activeCCC: state.activeCCC,
      setActiveCCC: state.setActiveCCC,
    }),
    shallow,
  );

  // Hooks
  const { cccButtonData } = useCCCButtonsData();

  // Handlers
  const handleCCCButtonClick = useCallback(
    (e: MouseEvent<HTMLButtonElement | MouseEvent>): void => {
      const name = (e.target as HTMLButtonElement).name as AchievmentsCCCTypes;
      if (name === activeCCC) return;
      setActiveCCC(name);

      cccButtonData.forEach((dataItem) => {
        if (!dataItem.ref.current) return;
        if (dataItem.name === name) {
          animCCCButton(dataItem.ref.current, 1.1, dataItem.rotation);
        } else {
          animCCCButton(dataItem.ref.current, 0.75, 0);
        }
      });
    },
    [activeCCC, setActiveCCC, cccButtonData],
  );

  const handleCCCButtonInitialized: ConstantVoidFunctionType =
    useCallback((): void => {
      if (cccButtonsInitialized) return;
      setCccButtonsInitialized(true);
      cccButtonData.forEach((dataItem) => {
        if (!dataItem.ref.current) return;
        if (dataItem.name === "all") {
          dataItem.ref.current.style.transform = "rotate(10deg) scale(1.1)";
        } else {
          dataItem.ref.current.style.transform = "rotate(0deg) scale(0.75)";
        }
      });
    }, [cccButtonData, cccButtonsInitialized, setCccButtonsInitialized]);

  // Listeners
  useEffect(handleCCCButtonInitialized, [handleCCCButtonInitialized]);

  return (
    <CCCButtonStyleContainer>
      {cccButtonData.map(({ id, name, content, ref }) => {
        return (
          <button
            key={id}
            ref={ref}
            name={name}
            onClick={handleCCCButtonClick}
            className={`ccc-button-${name}`}
          >
            {content}
          </button>
        );
      })}
    </CCCButtonStyleContainer>
  );
};

export default memo(CCCButtons);
