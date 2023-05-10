import { Plane, useTexture } from "@react-three/drei";
import { gsap } from "gsap";
import { FC, memo, useEffect, useRef } from "react";
import { LinearEncoding } from "three";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import { RefMeshType } from "../../../../shared/Types/RefTypes";

const tL = gsap.timeline();

const CursorMesh: FC = () => {
  // Refs
  const cursorMeshRef: RefMeshType = useRef(null);
  // Texture
  const cursorTexture = useTexture("/game_assets/textures/cursor.webp");
  cursorTexture.encoding = LinearEncoding;

  // Global State
  const { menuActive } = useGlobalState(
    (state) => ({
      menuActive: state.menuActive,
    }),
    shallow,
  );

  useEffect(() => {
    if (menuActive && cursorMeshRef.current) {
      tL.to(cursorMeshRef.current, {
        scale: 0.9,
        duration: 0.25,
        overwrite: true,
      });
      tL.to(cursorMeshRef, {
        scale: 1,
        duration: 0.25,
      });
    }
  }, [menuActive]);

  return (
    <Plane ref={cursorMeshRef} position={[0.05, 0, -1]}>
      <meshBasicMaterial transparent map={cursorTexture} />
    </Plane>
  );
};

export default memo(CursorMesh);
