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
    isCursorDown,
    setMenuActive,
    setIsCursorDown,
    isHoveringEntity,
    activeHoveredEntity,
    setIsHoveringEntity,
    setActiveHoveredEntity,
  } = useGlobalState(
    (state) => ({
      menuActive: state.menuActive,
      isCursorDown: state.isCursorDown,
      setMenuActive: state.setMenuActive,
      setIsCursorDown: state.setIsCursorDown,
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

      if (isCursorDown) {
        setIsCursorDown(false);
      }
    },
    [isCursorDown, setIsCursorDown, isHoveringEntity, setIsHoveringEntity],
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
      menuActive,
      setIsHoveringEntity,
      activeHoveredEntity,
      setActiveHoveredEntity,
    ],
  );

  const handlePointerDownEvent = useCallback(
    (event: ThreeEvent<MouseEvent>) => {
      event.stopPropagation();
      setIsCursorDown(true);
    },
    [setIsCursorDown],
  );

  const handlePointerUpEvent = useCallback(
    (event: ThreeEvent<MouseEvent>) => {
      event.stopPropagation();
      setIsCursorDown(false);
    },
    [setIsCursorDown],
  );

  const handleActiveHoveredEntityStateChange = useCallback(() => {
    if (name === activeHoveredEntity) {
      setIsHoveringEntity(true);
    }
  }, [name, activeHoveredEntity, setIsHoveringEntity]);

  const handleOnClickEvent = useCallback(
    (event: ThreeEvent<MouseEvent>) => {
      event.stopPropagation();
      if (menuActive) return;
      setMenuActive(true);
    },
    [setMenuActive, menuActive],
  );

  // Listeners
  useEffect(handleActiveHoveredEntityStateChange, [
    activeHoveredEntity,
    handleActiveHoveredEntityStateChange,
  ]);

  return (
    <Box
      scale={0.1}
      position={pos}
      ref={interactiveMeshRef}
      userData={{ name: name }}
      onClick={handleOnClickEvent}
      onPointerUp={handlePointerUpEvent}
      onPointerOut={handlePointerOutEvent}
      onPointerOver={handlePointerOverEvent}
      onPointerDown={handlePointerDownEvent}
    >
      <meshStandardMaterial color={"blue"} />
    </Box>
  );
};

export default memo(InteractiveGameEntity);
