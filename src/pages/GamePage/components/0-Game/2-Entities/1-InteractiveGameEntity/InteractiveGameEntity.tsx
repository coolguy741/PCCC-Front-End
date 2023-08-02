import { ThreeEvent } from "@react-three/fiber";
import { FC, Fragment, memo, useCallback, useEffect, useMemo } from "react";
import { Bone, BufferGeometry, Skeleton } from "three";
import { shallow } from "zustand/shallow";
import { InteractiveGameEntityTypes } from "../../../../globalState/modules/InteractiveGameEntityModule/InteractiveGameEntityModuleTypes";
import { AllHotspotKeysType } from "../../../../globalState/modules/LocationModule/LocationModuleTypes";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import { ConstantVoidFunctionType } from "../../../../shared/Types/DefineTypes";
import { InspectData } from "../../../1-UI/4-HUD/5-Inspect/7-InspectData/INSPECT_DATA";
import { animateInteractiveGameEntityOut } from "./InteractiveGameEntitiyAnimations";
import { InteractiveGameEntityMaterial } from "./InteractiveGameEntityDefines";

interface InteractiveGameEntityPropTypes {
  bone: Bone;
  skeleton: Skeleton;
  geometry: BufferGeometry;
  hotspot: AllHotspotKeysType;
  name: InteractiveGameEntityTypes;
}

const InteractiveGameEntity: FC<InteractiveGameEntityPropTypes> = ({
  bone,
  name,
  hotspot,
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
    activeGardenHotSpot,
    isActivelyTraveling,
    activeKitchenHotSpot,
    itemToRemoveFromScene,
    setActiveHoveredEntity,
    setItemToRemoveFromScene,
  } = useGlobalState(
    (state) => ({
      menuActive: state.menuActive,
      isCursorDown: state.isCursorDown,
      setMenuActive: state.setMenuActive,
      setIsCursorDown: state.setIsCursorDown,
      isHoveringEntity: state.isHoveringEntity,
      isActivelyTraveling: state.isActivelyTraveling,
      activeHoveredEntity: state.activeHoveredEntity,
      setIsHoveringEntity: state.setIsHoveringEntity,
      activeGardenHotSpot: state.activeGardenHotSpot,
      activeKitchenHotSpot: state.activeKitchenHotSpot,
      itemToRemoveFromScene: state.itemToRemoveFromScene,
      setActiveHoveredEntity: state.setActiveHoveredEntity,
      setItemToRemoveFromScene: state.setItemToRemoveFromScene,
    }),
    shallow,
  );

  const enitityEventsAllowed = useMemo(() => {
    if (isActivelyTraveling) return false;
    if (activeGardenHotSpot !== hotspot) return false;
    if (activeKitchenHotSpot !== hotspot) return false;
    return true;
  }, [isActivelyTraveling, activeGardenHotSpot, hotspot, activeKitchenHotSpot]);

  // Handlers
  const handlePointerLeaveEvent = useCallback(
    (event: ThreeEvent<MouseEvent>) => {
      if (!enitityEventsAllowed) return;
      event.stopPropagation();
      if (isHoveringEntity) {
        setIsHoveringEntity(false);
      }

      if (isCursorDown) {
        setIsCursorDown(false);
      }
    },
    [
      isCursorDown,
      setIsCursorDown,
      isHoveringEntity,
      setIsHoveringEntity,
      enitityEventsAllowed,
    ],
  );

  const handlePointerEnterEvent = useCallback(
    (event: ThreeEvent<MouseEvent>) => {
      if (!enitityEventsAllowed) return;
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
      enitityEventsAllowed,
      setActiveHoveredEntity,
    ],
  );

  const handlePointerDownEvent = useCallback(
    (event: ThreeEvent<MouseEvent>) => {
      if (!enitityEventsAllowed) return;
      event.stopPropagation();
      if (isCursorDown) return;
      setIsCursorDown(true);
    },
    [isCursorDown, setIsCursorDown, enitityEventsAllowed],
  );

  const handlePointerUpEvent = useCallback(
    (event: ThreeEvent<MouseEvent>) => {
      if (isActivelyTraveling) return;
      if (activeGardenHotSpot !== hotspot) return;
      event.stopPropagation();
      if (!isCursorDown) return;
      setIsCursorDown(false);
    },
    [
      hotspot,
      isCursorDown,
      setIsCursorDown,
      isActivelyTraveling,
      activeGardenHotSpot,
    ],
  );

  const handleActiveHoveredEntityStateChange: ConstantVoidFunctionType =
    useCallback((): void => {
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

  const handleRemoveItemFromScene: ConstantVoidFunctionType =
    useCallback((): void => {
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

  // useFrame(() => {
  //   console.log("allowed to hover");
  // });

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
