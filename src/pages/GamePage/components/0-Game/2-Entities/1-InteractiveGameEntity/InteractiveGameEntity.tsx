import { ThreeEvent } from "@react-three/fiber";
import { FC, Fragment, memo, useCallback, useEffect } from "react";
import { Bone, BufferGeometry, Skeleton } from "three";
import { shallow } from "zustand/shallow";
import { InteractiveGameEntityTypes } from "../../../../globalState/modules/InteractiveGameEntityModule/InteractiveGameEntityModuleTypes";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import { InspectData } from "../../../1-UI/1-HUD/5-Inspect/7-InspectData/INSPECT_DATA";
import { animateInteractiveGameEntityOut } from "./InteractiveGameEntitiyAnimations";
import { InteractiveGameEntityMaterial } from "./InteractiveGameEntityDefines";

interface InteractiveGameEntityPropTypes {
  bone: Bone;
  skeleton: Skeleton;
  geometry: BufferGeometry;
  name: InteractiveGameEntityTypes;
}

const InteractiveGameEntity: FC<InteractiveGameEntityPropTypes> = ({
  bone,
  name,
  skeleton,
  geometry,
}) => {
  // Global State
  const {
    activeGardenHotSpot,
    menuActive,
    isCursorDown,
    setMenuActive,
    setIsCursorDown,
    isHoveringEntity,
    activeHoveredEntity,
    setIsHoveringEntity,
    itemToRemoveFromScene,
    setActiveHoveredEntity,
    setItemToRemoveFromScene,
  } = useGlobalState(
    (state) => ({
      activeGardenHotSpot: state.activeGardenHotSpot,
      menuActive: state.menuActive,
      isCursorDown: state.isCursorDown,
      setMenuActive: state.setMenuActive,
      setIsCursorDown: state.setIsCursorDown,
      isHoveringEntity: state.isHoveringEntity,
      activeHoveredEntity: state.activeHoveredEntity,
      setIsHoveringEntity: state.setIsHoveringEntity,
      itemToRemoveFromScene: state.itemToRemoveFromScene,
      setActiveHoveredEntity: state.setActiveHoveredEntity,
      setItemToRemoveFromScene: state.setItemToRemoveFromScene,
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
      if (activeGardenHotSpot !== "ToolRack") return;
      if (name === activeHoveredEntity) {
        setIsHoveringEntity(true);
      } else {
        setActiveHoveredEntity(name);
      }
    },
    [
      name,
      menuActive,
      activeGardenHotSpot,
      setIsHoveringEntity,
      activeHoveredEntity,
      setActiveHoveredEntity,
    ],
  );

  const handlePointerDownEvent = useCallback(
    (event: ThreeEvent<MouseEvent>) => {
      event.stopPropagation();
      if (!isCursorDown) return;
      setIsCursorDown(true);
    },
    [setIsCursorDown, isCursorDown],
  );

  const handlePointerUpEvent = useCallback(
    (event: ThreeEvent<MouseEvent>) => {
      event.stopPropagation();
      if (activeGardenHotSpot !== "ToolRack") return;
      setIsCursorDown(false);
    },
    [setIsCursorDown, activeGardenHotSpot],
  );

  const handleActiveHoveredEntityStateChange = useCallback(() => {
    if (name === activeHoveredEntity) {
      setIsHoveringEntity(true);
    }
  }, [name, activeHoveredEntity, setIsHoveringEntity]);

  const handleOnClickEvent = useCallback(
    (event: ThreeEvent<MouseEvent>) => {
      event.stopPropagation();
      if (activeGardenHotSpot !== "ToolRack") return;
      if (menuActive) return;
      setMenuActive(true);
    },
    [setMenuActive, menuActive, activeGardenHotSpot],
  );

  const handleRemoveItemFromScene = useCallback(() => {
    if (!itemToRemoveFromScene) return;
    if (InspectData[name].assetName !== itemToRemoveFromScene) return;
    animateInteractiveGameEntityOut(bone);
    setItemToRemoveFromScene(null);
  }, [name, bone, itemToRemoveFromScene, setItemToRemoveFromScene]);

  // Listeners
  useEffect(handleRemoveItemFromScene, [
    itemToRemoveFromScene,
    handleRemoveItemFromScene,
  ]);

  useEffect(handleActiveHoveredEntityStateChange, [
    activeHoveredEntity,
    handleActiveHoveredEntityStateChange,
  ]);

  return (
    <Fragment>
      <primitive object={bone} />
      <skinnedMesh
        name={name}
        visible={false}
        geometry={geometry}
        skeleton={skeleton}
        onClick={handleOnClickEvent}
        onPointerUp={handlePointerUpEvent}
        onPointerDown={handlePointerDownEvent}
        onPointerLeave={handlePointerLeaveEvent}
        onPointerEnter={handlePointerEnterEvent}
        material={InteractiveGameEntityMaterial}
      />
    </Fragment>
  );
};

export default memo(InteractiveGameEntity);
