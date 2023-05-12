import { gsap } from "gsap";
import { FC, memo, useCallback, useRef } from "react";
import { BACK_1_OUT } from "../../../shared/Eases/Eases";
import { RefDivType } from "../../../shared/Types/RefTypes";
import SettingsHUDIconStyleContainer from "./SettingsHUDIconStyleContainer";

const SettingsHUDIcon: FC = () => {
  const ref: RefDivType = useRef(null);

  const handlePointerOver = useCallback(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      scale: 2.5,
      duration: 0.5,
      ease: BACK_1_OUT,
    });
  }, []);

  const handlePointerOut = useCallback(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      scale: 1,
      duration: 0.5,
      ease: BACK_1_OUT,
    });
  }, []);
  return (
    <SettingsHUDIconStyleContainer
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <div className="bg" ref={ref} />

      <img
        className="settings"
        alt={"Settings"}
        src={"/game_assets/ui_images/settings/settings.webp"}
        draggable={false}
      />
    </SettingsHUDIconStyleContainer>
  );
};

export default memo(SettingsHUDIcon);
