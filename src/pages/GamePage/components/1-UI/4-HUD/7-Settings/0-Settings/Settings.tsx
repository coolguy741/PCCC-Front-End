import { gsap } from "gsap";
import { FC, memo, useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { BACK_1_OUT } from "../../../../../shared/Eases/Eases";
import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";
import { RefDivType } from "../../../../../shared/Types/RefTypes";
import AudioSliders from "../1-AudioSliders/0-AudioSliders/AudioSliders";
import SettingsTitleTab from "../12-SettingsTitleTab/SettingsTitleTab";
import LanguageController from "../2-LanguageController/LanguageController";
import SaveButton from "../3-SaveButton/SaveButton";
import LoadButton from "../4-LoadButton/LoadButton";
import CreditsButton from "../5-CreditsButton/CreditsButton";
import QuitButton from "../6-QuitButton/QuitButton";
import SaveMessage from "../7-SaveMessage/SaveMessage";
import ExitButton from "../9-ExitButton/ExitButton";
import SettingsStyleContainer from "./SettingsStyleContainer";

const Settings: FC = () => {
  // Refs
  const settingsPanelRef: RefDivType = useRef(null);

  // Global State
  const {
    isLoadPanelOpen,
    isQuitPanelOpen,
    isCreditsPanelOpen,
    isSettingsPanelOpen,
    setIsSettingsPanelOpen,
  } = useGlobalState(
    (state) => ({
      isLoadPanelOpen: state.isLoadPanelOpen,
      isQuitPanelOpen: state.isQuitPanelOpen,
      isCreditsPanelOpen: state.isCreditsPanelOpen,
      isSettingsPanelOpen: state.isSettingsPanelOpen,
      setIsSettingsPanelOpen: state.setIsSettingsPanelOpen,
    }),
    shallow,
  );

  // Handlers
  const handleExitSettingsPanel: ConstantVoidFunctionType =
    useCallback((): void => {
      if (!isSettingsPanelOpen) return;
      setIsSettingsPanelOpen(false);
    }, [setIsSettingsPanelOpen, isSettingsPanelOpen]);

  const handleHideSettingsOnCreditsPanel: ConstantVoidFunctionType =
    useCallback(() => {
      if (!settingsPanelRef.current) return;

      if (isCreditsPanelOpen) {
        gsap.to(settingsPanelRef.current, {
          x: 500,
          opacity: 0,
          duration: 0.5,
          ease: BACK_1_OUT,
          overwrite: true,
          onComplete: () => {
            if (!settingsPanelRef.current) return;
            settingsPanelRef.current.style.visibility = "hidden";
          },
        });
      } else if (!isCreditsPanelOpen) {
        settingsPanelRef.current.style.visibility = "visible";
        gsap.to(settingsPanelRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.5,
          overwrite: true,
          ease: BACK_1_OUT,
        });
      }
    }, [isCreditsPanelOpen]);

  const handleHideSettingsOnLoadPanel: ConstantVoidFunctionType =
    useCallback(() => {
      if (!settingsPanelRef.current) return;

      if (isLoadPanelOpen) {
        gsap.to(settingsPanelRef.current, {
          opacity: 0,
          duration: 0.25,
          ease: BACK_1_OUT,
          overwrite: true,
          onComplete: () => {
            if (!settingsPanelRef.current) return;
            settingsPanelRef.current.style.visibility = "hidden";
          },
        });
      } else if (!isLoadPanelOpen) {
        settingsPanelRef.current.style.visibility = "visible";
        gsap.to(settingsPanelRef.current, {
          opacity: 1,
          duration: 0.25,
          ease: BACK_1_OUT,
          overwrite: true,
        });
      }
    }, [isLoadPanelOpen]);

  const handleHideSettingsOnQuitPanel: ConstantVoidFunctionType =
    useCallback(() => {
      if (!settingsPanelRef.current) return;

      if (isQuitPanelOpen) {
        gsap.to(settingsPanelRef.current, {
          opacity: 0,
          duration: 0.25,
          ease: BACK_1_OUT,
          overwrite: true,
          onComplete: () => {
            if (!settingsPanelRef.current) return;
            settingsPanelRef.current.style.visibility = "hidden";
          },
        });
      } else if (!isQuitPanelOpen) {
        settingsPanelRef.current.style.visibility = "visible";
        gsap.to(settingsPanelRef.current, {
          opacity: 1,
          duration: 0.25,
          ease: BACK_1_OUT,
          overwrite: true,
        });
      }
    }, [isQuitPanelOpen]);

  const handleShowHideSettingsPanel: ConstantVoidFunctionType =
    useCallback(() => {
      if (!settingsPanelRef.current) return;

      if (isSettingsPanelOpen) {
        settingsPanelRef.current.style.visibility = "visible";
        gsap.fromTo(
          settingsPanelRef.current,
          {
            y: -500,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            overwrite: true,
            ease: BACK_1_OUT,
          },
        );
      } else if (!isSettingsPanelOpen) {
        gsap.to(settingsPanelRef.current, {
          y: -500,
          opacity: 0,
          duration: 0.5,
          overwrite: true,
          ease: BACK_1_OUT,
          onComplete: () => {
            if (!settingsPanelRef.current) return;
            settingsPanelRef.current.style.visibility = "hidden";
          },
        });
      }
    }, [isSettingsPanelOpen]);

  // Listeners
  useEffect(handleHideSettingsOnQuitPanel, [
    isQuitPanelOpen,
    handleHideSettingsOnQuitPanel,
  ]);

  useEffect(handleHideSettingsOnLoadPanel, [
    isLoadPanelOpen,
    handleHideSettingsOnLoadPanel,
  ]);

  useEffect(handleHideSettingsOnCreditsPanel, [
    isCreditsPanelOpen,
    handleHideSettingsOnCreditsPanel,
  ]);

  useEffect(handleShowHideSettingsPanel, [
    isSettingsPanelOpen,
    handleShowHideSettingsPanel,
  ]);

  return (
    <SettingsStyleContainer ref={settingsPanelRef}>
      <SaveMessage />
      <div className="settings-modal">
        <SettingsTitleTab />
        <img
          alt="settings"
          draggable={false}
          className="settings-bg"
          src="/game_assets/ui_images/settings/settings_bg.webp"
        />

        <div className="settings-modal-controls">
          <AudioSliders />

          <div className="save-load">
            <SaveButton />
            <LoadButton />
          </div>

          <div className="language-credits">
            <LanguageController />
            <CreditsButton />
          </div>

          <QuitButton />

          <div className="version-copy-container">
            <h1 className="version-copy">Version 1.0</h1>
          </div>

          <div className="settings-exit-button">
            <ExitButton exitAction={handleExitSettingsPanel} />
          </div>
        </div>
      </div>
    </SettingsStyleContainer>
  );
};

export default memo(Settings);
