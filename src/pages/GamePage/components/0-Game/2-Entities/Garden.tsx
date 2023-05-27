import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { folder, useControls } from "leva";
import { memo, useCallback, useEffect, useState } from "react";
import {
  Group,
  Mesh,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  Shader,
  SkinnedMesh,
  Vector3,
} from "three";
import { GLTF } from "three-stdlib";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";

type GLTFResult = GLTF & {
  nodes: {
    Mesh001: Mesh;
    Mesh001_1: Mesh;
    Mesh001_2: Mesh;
    Mesh001_3: Mesh;
    Mesh001_4: Mesh;
    Mesh001_5: Mesh;
    Mesh001_6: Mesh;
    Mesh001_7: Mesh;
    Mesh001_8: Mesh;
    Mesh001_9: Mesh;
    Mesh001_10: Mesh;
    Mesh001_11: Mesh;
    Mesh001_12: Mesh;
    Mesh001_13: Mesh;
    Mesh001_14: Mesh;
    Mesh001_15: Mesh;
    Mesh001_16: Mesh;
    Mesh001_17: Mesh;
    Mesh001_18: Mesh;
    Mesh001_19: Mesh;
    Mesh001_20: Mesh;
    Mesh001_21: Mesh;
    Mesh001_22: Mesh;
    Mesh001_23: Mesh;
    Mesh001_24: Mesh;
  };
  materials: {
    ["Beige.002"]: MeshStandardMaterial;
    ["lambert2.001"]: MeshStandardMaterial;
    ["Dark_Brown.003"]: MeshStandardMaterial;
    ["Metal.002"]: MeshStandardMaterial;
    ["Brown.001"]: MeshStandardMaterial;
    ["Dark_Green.004"]: MeshStandardMaterial;
    ["Grey.001"]: MeshStandardMaterial;
    ["Light_Green.002"]: MeshStandardMaterial;
    ["Orange.002"]: MeshStandardMaterial;
    ["Light_Beige.002"]: MeshStandardMaterial;
    ["Glass.001"]: MeshStandardMaterial;
    ["Dark_Green.005"]: MeshStandardMaterial;
    ["Water.001"]: MeshStandardMaterial;
    ["farm_pack.001"]: MeshStandardMaterial;
    ["Red.001"]: MeshStandardMaterial;
    ["Yellow.001"]: MeshStandardMaterial;
  };
};

const loader = new GLTFLoader();
const c = new Vector3();

const alphaMat = new MeshPhysicalMaterial({
  transparent: true,
});

const regMat = new MeshPhysicalMaterial({
  transparent: true,
});

const Garden = (props: JSX.IntrinsicElements["group"]) => {
  // Local State
  const [gltfScene, setGltfScene] = useState<Group | null>(null);

  const { nodes, materials } = useGLTF(
    "/game_assets/models/pccc_garden_merged_v003-transformed.glb",
  ) as GLTFResult;

  // Global State
  const { dynamicGarden } = useGlobalState(
    (state) => ({
      dynamicGarden: state.dynamicGarden,
    }),
    shallow,
  );

  // Hooks
  const { enable, intensity, gardenVisible, colorMultiplier } = useControls({
    garden: folder(
      {
        gardenVisible: true,
        colorMultiplier: { r: 255, b: 255, g: 255 },
      },
      { collapsed: true },
    ),
    shadows: folder(
      {
        enable: true,
      },
      { collapsed: true },
    ),
    HDR: folder(
      {
        intensity: {
          value: 1,
          min: 0,
          max: 1,
          step: 0.0001,
        },
      },
      { collapsed: true },
    ),
  });

  // Handlers
  const handleOBC = useCallback((shader: Shader) => {
    shader.uniforms.uMultiplier = { value: new Vector3() };
    shader.vertexShader = shader.vertexShader.replace(
      "#include <color_pars_vertex>",
      `#include <color_pars_vertex>
    
            attribute vec4 color;
            attribute vec4 _ao;
            attribute vec4 _metallic;
            attribute vec4 _roughness;
            attribute vec4 _specular;
    
            varying vec4 vColorMask;
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
            
            vColorMask = color;
            vAOMask = _ao;
            vMetallicMask = _metallic;
            vRoughnessMask = _roughness;
            vSpecularMask = _specular;
    
            vPos = position;`,
    );

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <color_pars_fragment>",
      `#include <color_pars_fragment>
            varying vec4 vColorMask;
            varying vec4 vAOMask;
            varying vec4 vMetallicMask;
            varying vec4 vRoughnessMask;
            varying vec4 vSpecularMask;

            uniform vec3 uMultiplier;
            
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
      "diffuseColor *= vColorMask;",
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
                vec3 specularColorFactor = vColorMask.rgb;
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
        gl_FragColor = vec4(finalColor * uMultiplier, diffuseColor.a);
        `,
    );

    regMat.userData.shader = shader;
    // console.log(shader.fragmentShader);
  }, []);

  const handleOBCAlpha = useCallback((shader: Shader) => {
    shader.uniforms.uMultiplier = { value: new Vector3() };
    shader.vertexShader = shader.vertexShader.replace(
      "#include <color_pars_vertex>",
      `#include <color_pars_vertex>
    
            attribute vec4 color;
            attribute vec4 _alpha;
            attribute vec4 _ao;
            attribute vec4 _metallic;
            attribute vec4 _roughness;
            attribute vec4 _specular;
    
            varying vec4 vColorMask;
            varying vec4 vAlphaMask;
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
            
            vColorMask = color;
            vAlphaMask = _alpha;
            vAOMask = _ao;
            vMetallicMask = _metallic;
            vRoughnessMask = _roughness;
            vSpecularMask = _specular;
    
            vPos = position;`,
    );

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <color_pars_fragment>",
      `#include <color_pars_fragment>
            varying vec4 vColorMask;
            varying vec4 vAOMask;
            varying vec4 vAlphaMask;
            varying vec4 vMetallicMask;
            varying vec4 vRoughnessMask;
            varying vec4 vSpecularMask;

            uniform vec3 uMultiplier;
            
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
      "diffuseColor *= vColorMask;",
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
                vec3 specularColorFactor = vColorMask.rgb;
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
        gl_FragColor = vec4(finalColor * uMultiplier, vAlphaMask.r);
        `,
    );

    alphaMat.userData.shader = shader;
  }, []);

  useFrame(() => {
    c.set(
      colorMultiplier.r / 255,
      colorMultiplier.g / 255,
      colorMultiplier.b / 255,
    );

    if (regMat.userData.shader) {
      regMat.userData.shader.uniforms.uMultiplier.value = c;
    }

    if (alphaMat.userData.shader) {
      alphaMat.userData.shader.uniforms.uMultiplier.value = c;
    }
  });

  const handleUpdateGLTFScene = useCallback(() => {
    if (!dynamicGarden) return;

    loader.parse(dynamicGarden, "", (gltf) => {
      if (gltf.scene) {
        gltf.scene.traverse((child) => {
          if (child instanceof Mesh || child instanceof SkinnedMesh) {
            if (child.name === "garden") {
              child.castShadow = enable;
              child.receiveShadow = enable;
              child.visible = true;
              if (
                !child.geometry.attributes._ao ||
                !child.geometry.attributes._metallic ||
                !child.geometry.attributes._roughness ||
                !child.geometry.attributes._specular
              ) {
                setGltfScene(null);
                window.alert("incorrect attributes");
                return;
              } else {
                if (child.geometry.attributes._alpha) {
                  alphaMat.envMapIntensity = intensity;
                  alphaMat.onBeforeCompile = handleOBCAlpha;
                  child.material = alphaMat;
                } else {
                  regMat.envMapIntensity = intensity;
                  regMat.onBeforeCompile = handleOBC;
                  child.material = regMat;
                }
                setGltfScene(gltf.scene);
              }
            } else if (child.name.includes("collider")) {
              child.castShadow = false;
              child.receiveShadow = false;
              child.visible = false;
            } else {
              setGltfScene(null);
              window.alert("incorrect attributes");
              return;
            }
          }
        });
      }
    });
  }, [dynamicGarden, handleOBC, handleOBCAlpha, intensity, enable]);

  // Listeners
  useEffect(handleUpdateGLTFScene, [handleUpdateGLTFScene, dynamicGarden]);

  return (
    <group visible={gardenVisible} renderOrder={1}>
      {gltfScene ? (
        <group>{gltfScene && <primitive object={gltfScene} />}</group>
      ) : (
        <group dispose={null}>
          <group
            name="MergedEnvironment001"
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.0099999998, 0.0099999979, 0.0099999979]}
            userData={{ name: "MergedEnvironment.001" }}
          >
            <mesh
              name="Mesh001"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001.geometry}
              material={materials["Beige.002"]}
            />
            <mesh
              name="Mesh001_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_1.geometry}
              material={materials["lambert2.001"]}
            />
            <mesh
              name="Mesh001_2"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_2.geometry}
              material={materials["Dark_Brown.003"]}
            />
            <mesh
              name="Mesh001_3"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_3.geometry}
              material={materials["Metal.002"]}
            />
            <mesh
              name="Mesh001_4"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_4.geometry}
              material={materials["Brown.001"]}
            />
            <mesh
              name="Mesh001_5"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_5.geometry}
              material={materials["Dark_Green.004"]}
            />
            <mesh
              name="Mesh001_6"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_6.geometry}
              material={materials["Grey.001"]}
            />
            <mesh
              name="Mesh001_7"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_7.geometry}
              material={materials["Light_Green.002"]}
            />
            <mesh
              name="Mesh001_8"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_8.geometry}
              material={materials["Orange.002"]}
            />
            <mesh
              name="Mesh001_9"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_9.geometry}
              material={materials["Light_Beige.002"]}
            />
            <mesh
              name="Mesh001_10"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_10.geometry}
              material={materials["Glass.001"]}
            />
            <mesh
              name="Mesh001_11"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_11.geometry}
              material={materials["Dark_Green.005"]}
            />
            <mesh
              name="Mesh001_12"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_12.geometry}
              material={materials["Water.001"]}
            />
            <mesh
              name="Mesh001_13"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_13.geometry}
              material={materials["farm_pack.001"]}
            />
            <mesh
              name="Mesh001_14"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_14.geometry}
              material={materials["Red.001"]}
            />
            <mesh
              name="Mesh001_15"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_15.geometry}
              material={materials["Dark_Brown.003"]}
            />
            <mesh
              name="Mesh001_16"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_16.geometry}
              material={materials["Light_Green.002"]}
            />
            <mesh
              name="Mesh001_17"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_17.geometry}
              material={materials["Dark_Green.004"]}
            />
            <mesh
              name="Mesh001_18"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_18.geometry}
              material={materials["Metal.002"]}
            />
            <mesh
              name="Mesh001_19"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_19.geometry}
              material={materials["Yellow.001"]}
            />
            <mesh
              name="Mesh001_20"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_20.geometry}
              material={materials["Beige.002"]}
            />
            <mesh
              name="Mesh001_21"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_21.geometry}
              material={materials["Light_Beige.002"]}
            />
            <mesh
              name="Mesh001_22"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_22.geometry}
              material={materials["Orange.002"]}
            />
            <mesh
              name="Mesh001_23"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_23.geometry}
              material={materials["Dark_Green.004"]}
            />
            <mesh
              name="Mesh001_24"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_24.geometry}
              material={materials["Dark_Brown.003"]}
            />
          </group>
        </group>
      )}
    </group>
  );
};

useGLTF.preload("/game_assets/models/pccc_garden_merged_v003-transformed.glb");

export default memo(Garden);
