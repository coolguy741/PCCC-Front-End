import { TransformControls } from "@react-three/drei";
import { folder, useControls } from "leva";
import { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import {
  Euler,
  Group,
  MeshPhysicalMaterial,
  Quaternion,
  Shader,
  Vector3,
} from "three";
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
    
            attribute vec4 color;
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
            varying vec4 vSpecularMask;
            
            float map(float value, float min1, float max1, float min2, float max2) {
                return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
            }
            `,
    );

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <uv_pars_fragment>",
      `#include <uv_pars_fragment>
            varying vec2 vUv;`,
    );

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <color_fragment>",
      "diffuseColor *= vBaseColor;",
    );

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <roughnessmap_fragment>",
      `#include <roughnessmap_fragment>
        roughnessFactor = vRoughnessMask.r;
        `,
    );

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <metalnessmap_fragment>",
      `#include <metalnessmap_fragment>
           metalnessFactor = vMetallicMask.r;
          `,
    );

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <lights_physical_fragment>",
      `PhysicalMaterial material;
        material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
        vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
        float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
        material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
        material.roughness += geometryRoughness;
        material.roughness = min( material.roughness, 1.0 );
        #ifdef IOR
            material.ior = ior;
            #ifdef USE_SPECULAR
                float specularIntensityFactor = vSpecularMask.r;
                vec3 specularColorFactor = vBaseColor.rgb;
                #ifdef USE_SPECULAR_COLORMAP
                    specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
                #endif
                #ifdef USE_SPECULAR_INTENSITYMAP
                    specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
                #endif
                material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
            #else
                float specularIntensityFactor = 1.0;
                vec3 specularColorFactor = vec3( 1.0 );
                material.specularF90 = 1.0;
            #endif
            material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
        #else
            material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
            material.specularF90 = 1.0;
        #endif
        #ifdef USE_CLEARCOAT
            material.clearcoat = clearcoat;
            material.clearcoatRoughness = clearcoatRoughness;
            material.clearcoatF0 = vec3( 0.04 );
            material.clearcoatF90 = 1.0;
            #ifdef USE_CLEARCOATMAP
                material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
            #endif
            #ifdef USE_CLEARCOAT_ROUGHNESSMAP
                material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
            #endif
            material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
            material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
            material.clearcoatRoughness += geometryRoughness;
            material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
        #endif
        #ifdef USE_IRIDESCENCE
            material.iridescence = iridescence;
            material.iridescenceIOR = iridescenceIOR;
            #ifdef USE_IRIDESCENCEMAP
                material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
            #endif
            #ifdef USE_IRIDESCENCE_THICKNESSMAP
                material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
            #else
                material.iridescenceThickness = iridescenceThicknessMaximum;
            #endif
        #endif
        #ifdef USE_SHEEN
            material.sheenColor = sheenColor;
            #ifdef USE_SHEEN_COLORMAP
                material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
            #endif
            material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
            #ifdef USE_SHEEN_ROUGHNESSMAP
                material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
            #endif
        #endif
        `,
    );

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <output_fragment>",
      `#include <output_fragment>
        vec3 finalColor = outgoingLight * vAOMask.rgb;
        gl_FragColor = vec4(finalColor, diffuseColor.a);
        `,
    );

    console.log(shader.fragmentShader);
  }, []);

  const handleUpdateGLTFScene = useCallback(() => {
    if (!dynamicGLB) return;

    loader.parse(dynamicGLB, "", (gltf) => {
      const n = new MeshPhysicalMaterial();
      n.onBeforeCompile = handleOBC;
      // @ts-ignore
      gltf.scene["children"][0].material = n;
      // @ts-ignore
      console.log(gltf.scene["children"][0].geometry);
      //   console.log(gltf.scene["children"][0].material);

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

        {/* <Sphere>
          <meshPhysicalMaterial
            color={"red"}
            specularIntensity={0}
            metalness={1}
            roughness={0}
          />
        </Sphere> */}
      </group>
    </TransformControls>
  );
};

export default memo(DynamicEntity);

// gl_FragColor = vec4(vec3(vMetallicMask.r), diffuseColor.a);
// gl_FragColor = vec4(vec3(vSpecularMask.r), diffuseColor.a);
// gl_FragColor = vec4(vec3(vAOMask.g), diffuseColor.a);
// gl_FragColor = vec4(vec3(vRoughnessMask.r), diffuseColor.a);
