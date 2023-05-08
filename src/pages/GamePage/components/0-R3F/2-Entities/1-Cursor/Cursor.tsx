import { Plane, useTexture } from "@react-three/drei";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import {
  FC,
  Fragment,
  memo,
  MutableRefObject,
  useCallback,
  useRef,
} from "react";
import { LinearEncoding, Mesh, PerspectiveCamera, Vector2 } from "three";
import { POWER_1_INOUT } from "../../../../shared/Eases/Eases";
import { RefMeshType } from "../../../../shared/Types/RefTypes";

const Cursor: FC = () => {
  // Refs
  const cursorMeshRef: RefMeshType = useRef(null);
  const inspectItemMeshRef: RefMeshType = useRef(null);
  const pickupItemMeshRef: RefMeshType = useRef(null);
  const useItemMeshRef: RefMeshType = useRef(null);
  const pauseOptionsRef: MutableRefObject<boolean> = useRef(false);

  // Texture
  const cursorTexture = useTexture("/game_assets/textures/cursor.webp");
  const inspectItemTexture = useTexture("/game_assets/textures/inspect.webp");
  const pickupItemTexture = useTexture("/game_assets/textures/pickup.webp");
  const useItemTexture = useTexture("/game_assets/textures/use.webp");

  cursorTexture.encoding = LinearEncoding;
  inspectItemTexture.encoding = LinearEncoding;
  pickupItemTexture.encoding = LinearEncoding;
  useItemTexture.encoding = LinearEncoding;

  const handleCursorMeshFollow = useCallback(
    (
      cursorReference: Mesh,
      camera: PerspectiveCamera,
      pointer: Vector2,
      name: string,
    ) => {
      if (name === "cursor") {
        cursorReference.position
          .set(pointer.x + 0.1, pointer.y - 0.15, -0.95)
          .unproject(camera);
      } else if (name === "inspect") {
        cursorReference.position
          .set(pointer.x + 0.1 - 0.25, pointer.y, -0.95)
          .unproject(camera);
      } else if (name === "pickup") {
        cursorReference.position
          .set(pointer.x + 0.025, pointer.y + 0.2, -0.95)
          .unproject(camera);
      } else if (name === "use") {
        cursorReference.position
          .set(pointer.x + 0.2125, pointer.y, -0.95)
          .unproject(camera);
      }

      cursorReference.quaternion.copy(camera.quaternion);
    },
    [],
  );

  const handleClick = useCallback(() => {
    if (pauseOptionsRef.current) {
      pauseOptionsRef.current = false;
    } else {
      pauseOptionsRef.current = true;
    }

    if (cursorMeshRef.current) {
      gsap.to(cursorMeshRef.current.scale, {
        x: 0.02,
        y: 0.02,
        z: 0.02,
        duration: 0.05,
        overwrite: true,
        ease: POWER_1_INOUT,
        onComplete: () => {
          if (cursorMeshRef.current) {
            gsap.to(cursorMeshRef.current.scale, {
              x: 0.025,
              y: 0.025,
              z: 0.025,
              duration: 0.05,
              ease: POWER_1_INOUT,
            });
          }
        },
      });
    }
  }, []);

  const handleOptionOver = useCallback((e: ThreeEvent<MouseEvent>) => {
    gsap.to(e.eventObject.scale, {
      x: 0.03,
      y: 0.03,
      z: 0.03,
      duration: 0.05,
      overwrite: true,
      ease: POWER_1_INOUT,
      onComplete: () => {
        gsap.to(e.eventObject.scale, {
          x: 0.025,
          y: 0.025,
          z: 0.025,
          duration: 0.05,
          ease: POWER_1_INOUT,
        });
      },
    });
  }, []);

  // const handleOptionOut = useCallback((e: any) => {
  //   gsap.to(e.eventObject.scale, {
  //     x: 0.03,
  //     y: 0.03,
  //     z: 0.03,
  //     duration: 0.05,
  //     overwrite: true,
  //     ease: POWER_1_INOUT,
  //     onComplete: () => {
  //       gsap.to(e.eventObject.scale, {
  //         x: 0.025,
  //         y: 0.025,
  //         z: 0.025,
  //         duration: 0.05,
  //         ease: POWER_1_INOUT,
  //       });
  //     },
  //   });
  // }, []);

  // Update
  useFrame(({ camera, pointer }) => {
    if (cursorMeshRef.current) {
      handleCursorMeshFollow(
        cursorMeshRef.current,
        camera as PerspectiveCamera,
        pointer,
        "cursor",
      );
    }

    if (!pauseOptionsRef.current) {
      if (inspectItemMeshRef.current) {
        handleCursorMeshFollow(
          inspectItemMeshRef.current,
          camera as PerspectiveCamera,
          pointer,
          "inspect",
        );
      }

      if (pickupItemMeshRef.current) {
        handleCursorMeshFollow(
          pickupItemMeshRef.current,
          camera as PerspectiveCamera,
          pointer,
          "pickup",
        );
      }

      if (useItemMeshRef.current) {
        handleCursorMeshFollow(
          useItemMeshRef.current,
          camera as PerspectiveCamera,
          pointer,
          "use",
        );
      }
    }
  });

  return (
    <Fragment>
      <Plane
        ref={cursorMeshRef}
        scale={0.025}
        onClick={handleClick}
        renderOrder={1}
      >
        <meshBasicMaterial map={cursorTexture} transparent depthWrite={false} />
      </Plane>

      <Plane
        ref={inspectItemMeshRef}
        scale={0.025}
        renderOrder={0}
        onClick={handleOptionOver}
      >
        <meshBasicMaterial
          map={inspectItemTexture}
          transparent
          depthWrite={false}
        />
      </Plane>

      <Plane
        ref={pickupItemMeshRef}
        scale={0.025}
        renderOrder={0}
        onClick={handleOptionOver}
      >
        <meshBasicMaterial
          map={pickupItemTexture}
          transparent
          depthWrite={false}
        />
      </Plane>

      <Plane
        ref={useItemMeshRef}
        scale={0.025}
        renderOrder={0}
        onClick={handleOptionOver}
      >
        <meshBasicMaterial
          map={useItemTexture}
          transparent
          depthWrite={false}
        />
      </Plane>
    </Fragment>
  );
};

export default memo(Cursor);
