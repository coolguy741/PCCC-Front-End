import { FC, memo } from "react";
import StaticSVGLoader from "../../../3-Reusable/0-StaticSVGLoader.tsx/StaticSVGLoader";
import AudioSliders from "../1-AudioSliders/0-AudioSliders/AudioSliders";
import LanguageController from "../2-LanguageController/LanguageController";
import Save from "../3-Save/Save";
import Load from "../4-Load/Load";
import CreditsButtonBGSVG from "../4-SettingsSVGAssets/CreditsButtonBGSVG";
import CreditsButtonSVG from "../4-SettingsSVGAssets/CreditsButtonSVG";
import ExitSettingsButtonSVG from "../4-SettingsSVGAssets/ExitSettingsButtonSVG";
import QuitButtonBGSVG from "../4-SettingsSVGAssets/QuitButtonBGSVG";
import QuitButtonSVG from "../4-SettingsSVGAssets/QuitButtonSVG";
import { SettingsTabSVG } from "../4-SettingsSVGAssets/SettingsTabSVG";
import SettingsStyleContainer from "./SettingsStyleContainer";

const Settings: FC = () => {
  return (
    <SettingsStyleContainer>
      <div className="settings-modal">
        <div className="settings-tab-container">
          <div className="settings-svg-container">
            <StaticSVGLoader id="settings-svg" svgPath={SettingsTabSVG} />
          </div>
          <h1 className="settings-tab-text">Settings</h1>
        </div>

        <img
          alt="settings"
          draggable={false}
          className="settings-bg"
          src="/game_assets/ui_images/settings/settings_bg.webp"
        />

        <div className="settings-exit-button">
          <ExitSettingsButtonSVG />
        </div>

        <div className="settings-modal-controls">
          <AudioSliders />

          <div className="save-load">
            <Save />
            <Load />
          </div>

          <div className="language-credits">
            <LanguageController />
            <div className="credits-button">
              <div className="credits-button-bg">
                <CreditsButtonBGSVG />
              </div>
              <div className="credits-button-svg">
                <CreditsButtonSVG />
              </div>
            </div>
          </div>

          <div className="quit-button">
            <div className="quit-button-bg">
              <QuitButtonBGSVG />
            </div>
            <div className="quit-button-svg">
              <QuitButtonSVG />
            </div>
          </div>

          <div className="version-copy-container">
            <h1 className="version-copy">Version 1.0</h1>
          </div>
        </div>
      </div>
    </SettingsStyleContainer>
  );
};

export default memo(Settings);
