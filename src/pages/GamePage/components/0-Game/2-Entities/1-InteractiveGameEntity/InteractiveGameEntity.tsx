import { ThreeEvent } from "@react-three/fiber";
import { FC, memo, useCallback, useEffect } from "react";
import { BufferGeometry, Skeleton } from "three";
import { shallow } from "zustand/shallow";
import { InteractiveGameEntityTypes } from "../../../../globalState/modules/InteractiveGameEntityModule/InteractiveGameEntityModuleTypes";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import { InteractiveGameEntityMaterial } from "./InteractiveGameEntityDefines";

interface InteractiveGameEntityPropTypes {
  skeleton: Skeleton;
  geometry: BufferGeometry;
  name: InteractiveGameEntityTypes;
}

const InteractiveGameEntity: FC<InteractiveGameEntityPropTypes> = ({
  name,
  skeleton,
  geometry,
}) => {
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
  const handlePointerLeaveEvent = useCallback(
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

  const handlePointerEnterEvent = useCallback(
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
    <skinnedMesh
      name={name}
      visible={false}
      userData={{ name }}
      geometry={geometry}
      skeleton={skeleton}
      onClick={handleOnClickEvent}
      onPointerUp={handlePointerUpEvent}
      onPointerDown={handlePointerDownEvent}
      onPointerLeave={handlePointerLeaveEvent}
      onPointerEnter={handlePointerEnterEvent}
      material={InteractiveGameEntityMaterial}
    />
  );
};

export default memo(InteractiveGameEntity);
