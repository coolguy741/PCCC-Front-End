import { Instance, Instances, useGLTF } from "@react-three/drei";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { memo, MutableRefObject, useCallback, useEffect, useRef } from "react";
import {
  InstancedBufferAttribute,
  Mesh,
  MeshStandardMaterial,
  Object3D,
  Shader,
  sRGBEncoding,
  Vector3,
} from "three";
import { GLTF } from "three-stdlib";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import { BACK_1_OUT } from "../../../../shared/Eases/Eases";
import { useHotSpotRoute } from "../../4-Hooks/useHotSpotRoute";
import {
  BIGTREE_FOV,
  GARDENHOSE_FOV,
  KITCHENVIEW_FOV,
  PLANTBOX_FOV,
  SOILCORNER_FOV,
  TOOLRACK_FOV,
} from "../../5-Constants/0-Garden/GARDEN_FOV";
import {
  BIGTREE_LOOKAT_POSITION,
  GARDENHOSE_LOOKAT_POSITION,
  KITCHENVIEW_LOOKAT_POSITION,
  PLANTBOX_LOOKAT_POSITION,
  SOILCORNER_LOOKAT_POSITION,
  TOOLRACK_LOOKAT_POSITION,
} from "../../5-Constants/0-Garden/GARDEN_LOOKAT_POSITION";
import {
  GARDENVIEW_BIGTREE_ROUTE,
  GARDENVIEW_GARDENHOSE_ROUTE,
  GARDENVIEW_KITCHENVIEW_ROUTE,
  GARDENVIEW_PLANTBOX_ROUTE,
  GARDENVIEW_SOILCORNER_ROUTE,
  GARDENVIEW_TOOLRACK_ROUTE,
} from "../../5-Constants/0-Garden/GARDEN_ROUTES";

type GLTFResult = GLTF & {
  nodes: {
    Cube001: Mesh;
  };
  materials: {
    ["Material.001"]: MeshStandardMaterial;
  };
};

const attributeArray = new Float32Array([0, 1, 2, 3, 4, 5]);

const customBufferAttribute = new InstancedBufferAttribute(attributeArray, 1);

const handleOBC = (shader: Shader) => {
  shader.vertexShader = shader.vertexShader.replace(
    "#include <common>",
    `#include <common>
        attribute float aUvIndex;
        varying float vUvIndex;
        varying vec2 vUv;

    `,
  );
  shader.vertexShader = shader.vertexShader.replace(
    "#include <worldpos_vertex>",
    `#include <worldpos_vertex>
        vUvIndex = aUvIndex;
        vUv = uv;
    `,
  );
  shader.fragmentShader = shader.fragmentShader.replace(
    "#include <common>",
    `#include <common>
        varying float vUvIndex;
        varying vec2 vUv;

         
    mat4 contrastMatrix( float contrast ) {
        float t = ( 1.0 - contrast ) / 2.0;
        
        return mat4( contrast, 0, 0, 0,
                     0, contrast, 0, 0,
                     0, 0, contrast, 0,
                     t, t, t, 1 );
      }  

      mat4 saturationMatrix( float saturation ) {
        vec3 luminance = vec3( 0.3086, 0.6094, 0.0820 );
        
        float oneMinusSat = 1.0 - saturation;
        
        vec3 red = vec3( luminance.x * oneMinusSat );
        red+= vec3( saturation, 0, 0 );
        
        vec3 green = vec3( luminance.y * oneMinusSat );
        green += vec3( 0, saturation, 0 );
        
        vec3 blue = vec3( luminance.z * oneMinusSat );
        blue += vec3( 0, 0, saturation );
        
        return mat4( red,     0,
                     green,   0,
                     blue,    0,
                     0, 0, 0, 1 );
     }
  
    `,
  );
  shader.fragmentShader = shader.fragmentShader.replace(
    "#include <output_fragment>",
    ` #include <output_fragment>
        vec4 topLeft = texture2D(map, vUv);
        vec4 topRight = texture2D(map, vec2(vUv.x + 0.335, vUv.y));
        vec4 middleLeft = texture2D(map, vec2(vUv.x, vUv.y + 0.335));
        vec4 middleRight = texture2D(map, vec2(vUv.x + 0.335, vUv.y + 0.335));
        vec4 bottomLeft = texture2D(map, vec2(vUv.x, vUv.y + 0.67));
        vec4 bottomRight = texture2D(map, vec2(vUv.x + 0.335, vUv.y + 0.67));
        vec4 finalColor = vec4(0.0);
        finalColor = topLeft * step(-0.1, vUvIndex) * step(vUvIndex, 0.1);
        finalColor += topRight * step(0.9, vUvIndex) * step(vUvIndex, 1.1);
        finalColor += middleLeft * step(1.9, vUvIndex) * step(vUvIndex, 2.1);
        finalColor += middleRight * step(2.9, vUvIndex) * step(vUvIndex, 3.1);
        finalColor += bottomLeft * step(3.9, vUvIndex) * step(vUvIndex, 4.1);
        finalColor += bottomRight * step(4.9, vUvIndex) * step(vUvIndex, 5.1);
        gl_FragColor = contrastMatrix(1.25) * saturationMatrix(1.25) * vec4(finalColor.rgb, 1.0);
    `,
  );
};

const HotSpotLabels = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    "/game_assets/models/hotspot_webp.glb",
  ) as GLTFResult;

  // Global State
  const { activeLocation, activeGardenHotSpot, activeKitchenHotSpot } =
    useGlobalState(
      (state) => ({
        activeLocation: state.activeLocation,
        activeGardenHotSpot: state.activeGardenHotSpot,
        activeKitchenHotSpot: state.activeKitchenHotSpot,
      }),
      shallow,
    );

  useEffect(() => {
    if (nodes.Cube001.geometry) {
      nodes.Cube001.geometry.setAttribute("aUvIndex", customBufferAttribute);
    }
    if (materials) {
      materials["Material.001"].onBeforeCompile = handleOBC;

      if (!materials["Material.001"].map) return;
      materials["Material.001"].map.encoding = sRGBEncoding;
    }
  }, [nodes, materials]);

  const showSatelliteInfoPoints = (
    infoPointCS: Object3D,
    infoPointEC: Object3D,
    infoPointDC: Object3D,
    infoPointAC: Object3D,
    infoPointBC: Object3D,
    infoPointQC: Object3D,
  ) => {
    gsap.to(
      [
        infoPointCS.scale,
        infoPointEC.scale,
        infoPointDC.scale,
        infoPointAC.scale,
        infoPointBC.scale,
        infoPointQC.scale,
      ],
      {
        x: 1.5,
        y: 1.5,
        z: 1.5,
        stagger: 0.1,
        duration: 0.5,
        delay: 5,
        overwrite: true,
        ease: "elastic.out(1, 1)",
      },
    );
  };

  const hideSatelliteInfoPoints = (
    infoPointCS: Object3D,
    infoPointEC: Object3D,
    infoPointDC: Object3D,
    infoPointAC: Object3D,
    infoPointBC: Object3D,
    infoPointQC: Object3D,
  ) => {
    gsap.to(
      [
        infoPointCS.scale,
        infoPointEC.scale,
        infoPointDC.scale,
        infoPointAC.scale,
        infoPointBC.scale,
        infoPointQC.scale,
      ],
      {
        x: 0,
        y: 0,
        z: 0,
        stagger: 0.1,
        overwrite: true,
        duration: 0.5,
        ease: "elastic.out(1, 1)",
      },
    );
  };

  const handleGardenViewToToolRack = useHotSpotRoute({
    duration: 7,
    direction: true,
    fov: TOOLRACK_FOV,
    hotspot: "ToolRack",
    newLocation: "Garden",
    route: GARDENVIEW_TOOLRACK_ROUTE,
    lookAt: TOOLRACK_LOOKAT_POSITION,
  });

  const handleGardenViewToSoilCorner = useHotSpotRoute({
    duration: 7,
    direction: true,
    fov: SOILCORNER_FOV,
    hotspot: "SoilCorner",
    newLocation: "Garden",
    route: GARDENVIEW_SOILCORNER_ROUTE,
    lookAt: SOILCORNER_LOOKAT_POSITION,
  });

  const handleGardenViewToGardenHose = useHotSpotRoute({
    duration: 7,
    direction: true,
    fov: GARDENHOSE_FOV,
    hotspot: "GardenHose",
    newLocation: "Garden",
    route: GARDENVIEW_GARDENHOSE_ROUTE,
    lookAt: GARDENHOSE_LOOKAT_POSITION,
  });

  const handleGardenViewToKitchenView = useHotSpotRoute({
    duration: 7,
    direction: true,
    fov: KITCHENVIEW_FOV,
    hotspot: "Overview",
    newLocation: "Kitchen",
    route: GARDENVIEW_KITCHENVIEW_ROUTE,
    lookAt: KITCHENVIEW_LOOKAT_POSITION,
  });

  const handleGardenViewToPlantBox = useHotSpotRoute({
    duration: 7,
    direction: true,
    fov: PLANTBOX_FOV,
    hotspot: "PlantBox",
    newLocation: "Garden",
    route: GARDENVIEW_PLANTBOX_ROUTE,
    lookAt: PLANTBOX_LOOKAT_POSITION,
  });

  const handleGardenViewToBigTree = useHotSpotRoute({
    duration: 7,
    direction: true,
    fov: BIGTREE_FOV,
    hotspot: "BigTree",
    newLocation: "Garden",
    route: GARDENVIEW_BIGTREE_ROUTE,
    lookAt: BIGTREE_LOOKAT_POSITION,
  });

  const toolRackRef: MutableRefObject<Object3D | null> = useRef(null);
  const plantBoxRef: MutableRefObject<Object3D | null> = useRef(null);
  const soilCornerRef: MutableRefObject<Object3D | null> = useRef(null);
  const gardenHoseRef: MutableRefObject<Object3D | null> = useRef(null);
  const bigTreeRef: MutableRefObject<Object3D | null> = useRef(null);
  const kitchenViewRef: MutableRefObject<Object3D | null> = useRef(null);

  const onPointerEnter = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      if (activeGardenHotSpot !== "Overview" || activeLocation !== "Garden")
        return;
      gsap.to(e.eventObject.scale, {
        x: 1.75,
        y: 1.75,
        z: 1.75,
        overwrite: true,
        duration: 0.25,
        ease: BACK_1_OUT,
      });
    },
    [activeLocation, activeGardenHotSpot],
  );

  const onPointerLeave = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      if (activeGardenHotSpot !== "Overview" || activeLocation !== "Garden")
        return;
      gsap.to(e.eventObject.scale, {
        x: 1.5,
        y: 1.5,
        z: 1.5,
        overwrite: true,
        duration: 0.25,
        ease: BACK_1_OUT,
      });
    },
    [activeLocation, activeGardenHotSpot],
  );

  const onPointerDown = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      if (activeGardenHotSpot !== "Overview" || activeLocation !== "Garden")
        return;
      gsap.to(e.eventObject.scale, {
        x: 1.25,
        y: 1.25,
        z: 1.25,
        overwrite: true,
        duration: 0.25,
        ease: BACK_1_OUT,
      });
    },
    [activeLocation, activeGardenHotSpot],
  );

  const onPointerUp = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      gsap.to(e.eventObject.scale, {
        x: 1.5,
        y: 1.5,
        z: 1.5,
        overwrite: true,
        duration: 0.25,
        ease: BACK_1_OUT,
        onComplete: () => {
          if (
            toolRackRef.current &&
            soilCornerRef.current &&
            gardenHoseRef.current &&
            bigTreeRef.current &&
            plantBoxRef.current &&
            kitchenViewRef.current
          ) {
            const isToolRack = toolRackRef.current.name === e.eventObject.name;
            const isSoilCorner =
              soilCornerRef.current.name === e.eventObject.name;
            const isGardenHose =
              gardenHoseRef.current.name === e.eventObject.name;
            const isBigTree = bigTreeRef.current.name === e.eventObject.name;
            const isPlantBox = plantBoxRef.current.name === e.eventObject.name;
            const isKitchenView =
              kitchenViewRef.current.name === e.eventObject.name;

            if (isToolRack) {
              hideSatelliteInfoPoints(
                toolRackRef.current,
                soilCornerRef.current,
                gardenHoseRef.current,
                bigTreeRef.current,
                plantBoxRef.current,
                kitchenViewRef.current,
              );
            } else if (isSoilCorner) {
              hideSatelliteInfoPoints(
                soilCornerRef.current,
                toolRackRef.current,
                gardenHoseRef.current,
                bigTreeRef.current,
                plantBoxRef.current,
                kitchenViewRef.current,
              );
            } else if (isGardenHose) {
              hideSatelliteInfoPoints(
                gardenHoseRef.current,
                soilCornerRef.current,
                toolRackRef.current,
                bigTreeRef.current,
                plantBoxRef.current,
                kitchenViewRef.current,
              );
            } else if (isBigTree) {
              hideSatelliteInfoPoints(
                bigTreeRef.current,
                gardenHoseRef.current,
                soilCornerRef.current,
                toolRackRef.current,
                plantBoxRef.current,
                kitchenViewRef.current,
              );
            } else if (isPlantBox) {
              hideSatelliteInfoPoints(
                plantBoxRef.current,
                bigTreeRef.current,
                gardenHoseRef.current,
                soilCornerRef.current,
                toolRackRef.current,
                kitchenViewRef.current,
              );
            } else if (isKitchenView) {
              hideSatelliteInfoPoints(
                kitchenViewRef.current,
                plantBoxRef.current,
                bigTreeRef.current,
                gardenHoseRef.current,
                soilCornerRef.current,
                toolRackRef.current,
              );
            }
          }
        },
      });

      const name = e.eventObject.name;

      switch (name) {
        case "ToolRack":
          handleGardenViewToToolRack.handleRouteTransistion();
          break;
        case "SoilCorner":
          handleGardenViewToSoilCorner.handleRouteTransistion();
          break;
        case "GardenHose":
          handleGardenViewToGardenHose.handleRouteTransistion();
          break;
        case "Overview":
          handleGardenViewToKitchenView.handleRouteTransistion();
          break;
        case "PlantBox":
          handleGardenViewToPlantBox.handleRouteTransistion();
          break;
        case "BigTree":
          handleGardenViewToBigTree.handleRouteTransistion();
          break;
        default:
          break;
      }
    },
    [
      handleGardenViewToToolRack,
      handleGardenViewToSoilCorner,
      handleGardenViewToGardenHose,
      handleGardenViewToKitchenView,
      handleGardenViewToPlantBox,
      handleGardenViewToBigTree,
    ],
  );

  useFrame(({ camera }) => {
    if (
      toolRackRef.current &&
      soilCornerRef.current &&
      gardenHoseRef.current &&
      bigTreeRef.current &&
      plantBoxRef.current &&
      kitchenViewRef.current
    ) {
      toolRackRef.current.lookAt(camera.position);
      soilCornerRef.current.lookAt(camera.position);
      gardenHoseRef.current.lookAt(camera.position);
      bigTreeRef.current.lookAt(camera.position);
      plantBoxRef.current.lookAt(camera.position);
      kitchenViewRef.current.lookAt(camera.position);
    }
  });

  useEffect(() => {
    if (activeLocation === "Garden" && activeGardenHotSpot === "Overview") {
      if (
        toolRackRef.current &&
        soilCornerRef.current &&
        gardenHoseRef.current &&
        bigTreeRef.current &&
        plantBoxRef.current &&
        kitchenViewRef.current
      ) {
        showSatelliteInfoPoints(
          toolRackRef.current,
          soilCornerRef.current,
          gardenHoseRef.current,
          bigTreeRef.current,
          plantBoxRef.current,
          kitchenViewRef.current,
        );
      }
    }
  }, [activeLocation, activeGardenHotSpot, activeKitchenHotSpot]);

  return (
    <Instances
      geometry={nodes.Cube001.geometry}
      material={materials["Material.001"]}
    >
      <Instance
        ref={toolRackRef}
        position={TOOLRACK_LOOKAT_POSITION.clone().add(
          new Vector3(-0.25, 0.75, 0),
        )}
        scale={0}
        name="ToolRack"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
      />
      <Instance
        ref={plantBoxRef}
        position={PLANTBOX_LOOKAT_POSITION.clone().add(new Vector3(0, 0.5, 0))}
        scale={0}
        name="PlantBox"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
      />
      <Instance
        ref={soilCornerRef}
        position={SOILCORNER_LOOKAT_POSITION.clone().add(
          new Vector3(-0.75, 0.5, 0),
        )}
        scale={0}
        name="SoilCorner"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
      />
      <Instance
        ref={gardenHoseRef}
        position={GARDENHOSE_LOOKAT_POSITION.clone().add(
          new Vector3(-0.25, 0.5, 0.25),
        )}
        scale={0}
        name="GardenHose"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
      />
      <Instance
        ref={bigTreeRef}
        position={BIGTREE_LOOKAT_POSITION.clone().add(
          new Vector3(-0.5, 0.2, 0),
        )}
        scale={0}
        name="BigTree"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
      />
      <Instance
        ref={kitchenViewRef}
        position={KITCHENVIEW_LOOKAT_POSITION.clone().add(
          new Vector3(0, 0.75, 0),
        )}
        scale={0}
        name="Overview"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
      />
    </Instances>
  );
};

useGLTF.preload("/game_assets/models/hotspot_webp.glb");

export default memo(HotSpotLabels);
