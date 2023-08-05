import { gsap } from "gsap";
import { FC, Fragment, memo, useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../../globalState/useGlobalState";
import { BACK_1_OUT } from "../../../../../../shared/Eases/Eases";
import { ConstantVoidFunctionType } from "../../../../../../shared/Types/DefineTypes";
import { RefDivType } from "../../../../../../shared/Types/RefTypes";
import ExitButton from "../../9-ExitButton/ExitButton";
import LoadSlotOption from "../1-LoadSlotOption/LoadSlotOption";
import LoadPanelBG from "./assets/load_panel_bg.webp";
import LoadPanelStyleContainer from "./LoadPanelStyleContainer";

const LoadPanel: FC = () => {
  // Refs
  const loadPanelRef: RefDivType = useRef(null);
  const loadPanelTitleRef: RefDivType = useRef(null);
  const loadPanelSlotOptionsRef: RefDivType = useRef(null);

  // Global State
  const { activeLanguage, isLoadPanelOpen, setIsLoadPanelOpen } =
    useGlobalState(
      (state) => ({
        activeLanguage: state.activeLanguage,
        isLoadPanelOpen: state.isLoadPanelOpen,
        setIsLoadPanelOpen: state.setIsLoadPanelOpen,
      }),
      shallow,
    );

  // Handlers
  const handleCloseLoadPanel: ConstantVoidFunctionType =
    useCallback((): void => {
      if (!isLoadPanelOpen) return;
      if (!loadPanelRef.current) return;
      if (!loadPanelTitleRef.current) return;
      if (!loadPanelSlotOptionsRef.current) return;

      gsap.to([loadPanelTitleRef.current, loadPanelSlotOptionsRef.current], {
        opacity: 0,
        scale: 0,
        stagger: 0.05,
        duration: 0.25,
        overwrite: true,
        ease: BACK_1_OUT,
        onComplete: () => {
          if (!loadPanelRef.current) return;
          setIsLoadPanelOpen(false);
          loadPanelRef.current.style.visibility = "hidden";
        },
      });
    }, [isLoadPanelOpen, setIsLoadPanelOpen]);

  const handleOpenLoadPanel: ConstantVoidFunctionType =
    useCallback((): void => {
      if (!isLoadPanelOpen) return;
      if (!loadPanelRef.current) return;

      loadPanelRef.current.style.visibility = "visible";
      gsap.fromTo(
        [loadPanelTitleRef.current, loadPanelSlotOptionsRef.current],
        {
          opacity: 0,
          scale: 0,
        },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.05,
          duration: 0.25,
          overwrite: true,
          ease: BACK_1_OUT,
        },
      );
    }, [isLoadPanelOpen]);

  // Listeners
  useEffect(handleOpenLoadPanel, [isLoadPanelOpen, handleOpenLoadPanel]);

  return (
    <LoadPanelStyleContainer ref={loadPanelRef}>
      <div className="load-panel-title" ref={loadPanelTitleRef}>
        <div className="load-panel-bg">
          <img alt={"load"} draggable={"false"} src={LoadPanelBG} />
        </div>

        <div className="load-panel-text-container">
          <h1 className="load-panel-text">
            {activeLanguage === "eng" ? (
              <Fragment>
                Pick up where you left
                <br />
                off last time
              </Fragment>
            ) : (
              <Fragment>
                Reprenez là où vous <br /> êtes arrêté la dernière fois
              </Fragment>
            )}
          </h1>
        </div>

        <div className="load-panel-exit-button">
          <ExitButton exitAction={handleCloseLoadPanel} />
        </div>
      </div>
      <div className="slot-options" ref={loadPanelSlotOptionsRef}>
        <LoadSlotOption
          slotPosition={1}
          recipeTitle={"Vegetable Spring Rolls"}
          locationImgSrc={"Vegetable Spring Rolls"}
        />
        <LoadSlotOption
          slotPosition={2}
          recipeTitle={"Roasted Tomato Soup"}
          locationImgSrc={"Vegetable Spring Rolls"}
        />
        <LoadSlotOption
          slotPosition={3}
          recipeTitle={"Yogurt Berry Parfait"}
          locationImgSrc={"Vegetable Spring Rolls"}
        />
      </div>
    </LoadPanelStyleContainer>
  );
};

export default memo(LoadPanel);
