import { FC, memo } from "react";
import StaticSVGLoader from "../../../3-Reusable/0-StaticSVGLoader.tsx/StaticSVGLoader";
import AudioSliders from "../1-AudioSliders/AudioSliders";
import CreditsButtonBGSVG from "../2-SettingsSVGAssets/CreditsButtonBGSVG";
import CreditsButtonSVG from "../2-SettingsSVGAssets/CreditsButtonSVG";
import EngButtonSVG from "../2-SettingsSVGAssets/EngButtonSVG";
import ExitSettingsButtonSVG from "../2-SettingsSVGAssets/ExitSettingsButtonSVG";
import FrenchButtonSVG from "../2-SettingsSVGAssets/FrenchButtonSVG";
import LanguageBGSVG from "../2-SettingsSVGAssets/LanguageBGSVG";
import LoadButtonBGSVG from "../2-SettingsSVGAssets/LoadButtonBGSVG";
import LoadButtonSVG from "../2-SettingsSVGAssets/LoadButtonSVG";
import QuitButtonBGSVG from "../2-SettingsSVGAssets/QuitButtonBGSVG";
import QuitButtonSVG from "../2-SettingsSVGAssets/QuitButtonSVG";
import SaveButtonBGSVG from "../2-SettingsSVGAssets/SaveButtonBGSVG";
import SaveButtonSVG from "../2-SettingsSVGAssets/SaveButtonSVG";
import { SettingsTabSVG } from "../2-SettingsSVGAssets/SettingsTabSVG";
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
            <div className="save-button">
              <div className="save-button-bg">
                <SaveButtonBGSVG />
              </div>
              <div className="save-button-svg">
                <SaveButtonSVG />
              </div>
            </div>
            <div className="load-button">
              <div className="load-button-bg">
                <LoadButtonBGSVG />
              </div>
              <div className="load-button-svg">
                <LoadButtonSVG />
              </div>
            </div>
          </div>

          <div className="language-credits">
            <div className="language-button">
              <div className="language-button-bg">
                <LanguageBGSVG />
              </div>
              <div className="eng-french-buttons">
                <div className="english">
                  <EngButtonSVG />
                </div>
                <div className="french">
                  <FrenchButtonSVG />
                </div>
              </div>
            </div>
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
