import { gsap } from "gsap";
import { FC, memo, useCallback, useRef } from "react";
import { BACK_1_OUT } from "../../../shared/Eases/Eases";
import { RefDivType } from "../../../shared/Types/RefTypes";
import InventoryHUDIconStyleContainer from "./InventoryHUDIconStyleContainer";

const InventoryHUDIcon: FC = () => {
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
    <InventoryHUDIconStyleContainer
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <div ref={ref} className="bg" />
      <img
        className="inventory"
        alt={"Inventory"}
        src={"/game_assets/ui_images/inventory/inventory.webp"}
        draggable={false}
        onPointerOver={handlePointerOver}
      />
    </InventoryHUDIconStyleContainer>
  );
};

export default memo(InventoryHUDIcon);
