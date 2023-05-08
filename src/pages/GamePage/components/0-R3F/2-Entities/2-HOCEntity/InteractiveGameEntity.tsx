import { Box } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import { FC, memo, useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { InteractiveGameEntityTypes } from "../../../../globalState/modules/InteractiveGameEntityModule/InteractiveGameEntityModuleTypes";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import { RefMeshType } from "../../../../shared/Types/RefTypes";

interface InteractiveGameEntityPropTypes {
  name: InteractiveGameEntityTypes;
  tempOffset: number;
}

const InteractiveGameEntity: FC<InteractiveGameEntityPropTypes> = ({
  name,
  tempOffset,
}) => {
  // Refs
  const interactiveMeshRef: RefMeshType = useRef(null);

  // Global State
  const {
    isHoveringEntity,
    activeHoveredEntity,
    setIsHoveringEntity,
    setActiveHoveredEntity,
  } = useGlobalState(
    (state) => ({
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
      if (name === activeHoveredEntity) {
        setIsHoveringEntity(true);
      } else {
        setActiveHoveredEntity(name);
      }
    },
    [name, setActiveHoveredEntity, setIsHoveringEntity, activeHoveredEntity],
  );

  const handleActiveHoveredEntityStateChange = useCallback(() => {
    if (name === activeHoveredEntity) {
      setIsHoveringEntity(true);
    }
  }, [name, activeHoveredEntity, setIsHoveringEntity]);

  // Listeners
  useEffect(() => {
    handleActiveHoveredEntityStateChange();
  }, [activeHoveredEntity, handleActiveHoveredEntityStateChange]);

  return (
    <Box
      scale={0.1}
      ref={interactiveMeshRef}
      userData={{ name: name }}
      position={[tempOffset, 0.1, 0.3]}
      onPointerOut={handlePointerOutEvent}
      onPointerOver={handlePointerOverEvent}
    >
      <meshStandardMaterial color={"blue"} />
    </Box>
  );
};

export default memo(InteractiveGameEntity);
