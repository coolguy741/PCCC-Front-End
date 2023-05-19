import { TransformControls } from "@react-three/drei";
import { folder, useControls } from "leva";
import { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import { Euler, Group, Quaternion, Shader, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import { RefGroupType } from "../../../shared/Types/RefTypes";

const loader = new GLTFLoader();

const dynamicGLBWorldPos = new Vector3();
const dynamicGLBWorldScale = new Vector3();

const dynamicGLBWorldQuat = new Quaternion();
const dynamicGLBWorldEul = new Euler();

const DynamicEntity: FC = () => {
  // Refs
  const dynamicGLBRef: RefGroupType = useRef(null);

  // Local State
  const [gltfScene, setGltfScene] = useState<Group | null>(null);

  // Global State
  const { dynamicGLB } = useGlobalState(
    (state) => ({ dynamicGLB: state.dynamicGLB }),
    shallow,
  );

  // Hooks
  const { transforms, mode } = useControls({
    DynamicModel: folder({
      transforms: true,
      mode: {
        value: 0,
        min: 0,
        max: 2,
        step: 1,
      },
    }),
  });

  // Handlers
  const handleLogLightPos = useCallback(() => {
    if (!dynamicGLBRef.current) return;

    const newPos = dynamicGLBRef.current.getWorldPosition(dynamicGLBWorldPos);
    const newRot =
      dynamicGLBRef.current.getWorldQuaternion(dynamicGLBWorldQuat);
    dynamicGLBWorldEul.setFromQuaternion(newRot);
    dynamicGLBRef.current.getWorldScale(dynamicGLBWorldScale);
    console.clear();
    console.log(
      "dynamicGLBPosition:",
      "x:",
      newPos.x,
      "y:",
      newPos.y,
      "z:",
      newPos.z,
    );
    console.log(
      "dynamicGLBRotation:",
      "x:",
      dynamicGLBWorldEul.x,
      "y:",
      dynamicGLBWorldEul.y,
      "z:",
      dynamicGLBWorldEul.z,
    );
    console.log(
      "dynamicGLBScale:",
      "x:",
      dynamicGLBWorldScale.x,
      "y:",
      dynamicGLBWorldScale.y,
      "z:",
      dynamicGLBWorldScale.z,
    );
  }, []);

  const handleOBC = useCallback((shader: Shader) => {
    shader.vertexShader = shader.vertexShader.replace(
      "#include <color_pars_vertex>",
      `#include <color_pars_vertex>
    
            attribute vec4 _ao;
            attribute vec4 _metallic;
            attribute vec4 _roughness;
            attribute vec4 _specular;
    
            varying vec4 vBaseColor;
            varying vec4 vAOMask;
            varying vec4 vMetallicMask;
            varying vec4 vRoughnessMask;
            varying vec4 vSpecularMask;

            varying vec3 vPos;
            varying vec2 vUv;`,
    );

    shader.vertexShader = shader.vertexShader.replace(
      "#include <uv_vertex>",
      `#include <uv_vertex>
            vUv = uv;`,
    );

    shader.vertexShader = shader.vertexShader.replace(
      "#include <color_vertex>",
      `#include <color_vertex>
            
            vBaseColor = color;
            vAOMask = _ao;
            vMetallicMask = _metallic;
            vRoughnessMask = _roughness;
            vSpecularMask = _specular;
    
            vPos = position;`,
    );

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <color_pars_fragment>",
      `#include <color_pars_fragment>
            varying vec4 vBaseColor;
            varying vec4 vAOMask;
            varying vec4 vMetallicMask;
            varying vec4 vRoughnessMask;
            varying vec4 vSpecularMask;`,
    );

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <uv_pars_fragment>",
      `#include <uv_pars_fragment>
            varying vec2 vUv;`,
    );

    // shader.fragmentShader = shader.fragmentShader.replace(
    //   "#include <roughnessmap_fragment>",
    //   `#include <roughnessmap_fragment>
    //         roughnessFactor = vRoughnessMask.r;
    //     `,
    // );

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <roughnessmap_fragment>",
      `#include <roughnessmap_fragment>
      roughnessFactor = vRoughnessMask.r;
      `,
    );

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <aomap_fragment>",
      ` float ambientOcclusion = vAOMask.r;
        reflectedLight.indirectDiffuse *= ambientOcclusion;
            #if defined( USE_ENVMAP ) && defined( STANDARD )
                float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
                reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
            #endif
       `,
    );

    // shader.fragmentShader = shader.fragmentShader.replace(
    //   "#include <aomap_fragment>",
    //   "float ambientOcclusion = vAOMask.r;",
    // );

    // shader.fragmentShader = shader.fragmentShader.replace(
    //   "float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;",
    //   "float ambientOcclusion = vAOMask.r;",
    // );

    // shader.fragmentShader = shader.fragmentShader.replace(
    //   "#include <output_fragment>",
    //   `#include <output_fragment>

    //       vec3 finalColor = vec3(0.0);

    //       finalColor = mix(finalColor, vec3(1.0, 0.0, 1.0), vAOMask.r);
    //       finalColor = mix(finalColor, vec3(1.0, 0.0, 0.0), vMetallicMask.r);
    //       finalColor = mix(finalColor, vec3(0.0, 1.0, 0.0), vRoughnessMask.r);
    //       finalColor = mix(finalColor, vec3(0.0, 0.0, 1.0), vSpecularMask.r);

    //       gl_FragColor = vec4(finalColor, 1.0);`,
    // );

    console.log(shader.fragmentShader);
  }, []);

  const handleUpdateGLTFScene = useCallback(() => {
    if (!dynamicGLB) return;

    loader.parse(dynamicGLB, "", (gltf) => {
      // @ts-ignore
      gltf.scene["children"][0].material.onBeforeCompile = handleOBC;

      // @ts-ignore
      console.log(gltf.scene["children"][0].geometry);

      setGltfScene(gltf.scene);
    });
  }, [dynamicGLB, handleOBC]);

  // Listeners
  useEffect(handleUpdateGLTFScene, [handleUpdateGLTFScene, dynamicGLB]);

  return (
    <TransformControls
      position={[0, 1, 1]}
      onMouseUp={handleLogLightPos}
      mode={mode === 0 ? "translate" : mode === 1 ? "rotate" : "scale"}
      showX={transforms && dynamicGLB !== null}
      showY={transforms && dynamicGLB !== null}
      showZ={transforms && dynamicGLB !== null}
    >
      <group>
        {gltfScene && <primitive ref={dynamicGLBRef} object={gltfScene} />}
      </group>
    </TransformControls>
  );
};

export default memo(DynamicEntity);
