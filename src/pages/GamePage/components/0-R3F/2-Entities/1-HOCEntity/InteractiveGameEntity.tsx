import { Box } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import { FC, memo, useCallback, useEffect, useRef } from "react";
import { Vector3 } from "three";
import { shallow } from "zustand/shallow";
import { InteractiveGameEntityTypes } from "../../../../globalState/modules/InteractiveGameEntityModule/InteractiveGameEntityModuleTypes";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import { RefMeshType } from "../../../../shared/Types/RefTypes";

interface InteractiveGameEntityPropTypes {
  name: InteractiveGameEntityTypes;
  pos: Vector3;
}

const InteractiveGameEntity: FC<InteractiveGameEntityPropTypes> = ({
  name,
  pos,
}) => {
  // Refs
  const interactiveMeshRef: RefMeshType = useRef(null);

  // Global State
  const {
    menuActive,
    setMenuActive,
    isHoveringEntity,
    activeHoveredEntity,
    setIsHoveringEntity,
    setActiveHoveredEntity,
  } = useGlobalState(
    (state) => ({
      menuActive: state.menuActive,
      setMenuActive: state.setMenuActive,
      isHoveringEntity: state.isHoveringEntity,
      activeHoveredEntity: state.activeHoveredEntity,
      setIsHoveringEntity: state.setIsHoveringEntity,
      setActiveHoveredEntity: state.setActiveHoveredEntity,
    }),
    shallow,
  );

  // Handlers
  const handlePointerOutEvent = useCallback(
    (event: ThreeEvent<MouseEvent>) => {
      event.stopPropagation();
      if (isHoveringEntity) {
        setIsHoveringEntity(false);
      }
    },
    [isHoveringEntity, setIsHoveringEntity],
  );

  const handlePointerOverEvent = useCallback(
    (event: ThreeEvent<MouseEvent>) => {
      event.stopPropagation();
      if (menuActive) return;
      if (name === activeHoveredEntity) {
        setIsHoveringEntity(true);
      } else {
        setActiveHoveredEntity(name);
      }
    },
    [
      name,
      setActiveHoveredEntity,
      setIsHoveringEntity,
      activeHoveredEntity,
      menuActive,
    ],
  );

  const handleActiveHoveredEntityStateChange = useCallback(() => {
    if (name === activeHoveredEntity) {
      setIsHoveringEntity(true);
    }
  }, [name, activeHoveredEntity, setIsHoveringEntity]);

  const handlemenuActive = useCallback(
    (event: ThreeEvent<MouseEvent>) => {
      event.stopPropagation();
      if (menuActive) {
        setMenuActive(false);
      } else {
        setMenuActive(true);
      }
    },
    [setMenuActive, menuActive],
  );

  // Listeners
  useEffect(() => {
    handleActiveHoveredEntityStateChange();
  }, [activeHoveredEntity, handleActiveHoveredEntityStateChange]);

  return (
    <Box
      scale={0.1}
      ref={interactiveMeshRef}
      userData={{ name: name }}
      onClick={handlemenuActive}
      position={pos}
      onPointerOut={handlePointerOutEvent}
      onPointerOver={handlePointerOverEvent}
    >
      <meshStandardMaterial color={"blue"} />
    </Box>
  );
};

export default memo(InteractiveGameEntity);
