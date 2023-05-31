import { useFrame } from "@react-three/fiber";
import { folder, useControls } from "leva";
import { memo, useCallback, useEffect, useState } from "react";
import {
  Group,
  Mesh,
  MeshPhysicalMaterial,
  Shader,
  SkinnedMesh,
  Vector3,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import Garden from "./0-Garden/Garden";

const loader = new GLTFLoader();
const c = new Vector3();

const alphaMat = new MeshPhysicalMaterial({
  transparent: true,
});

const regMat = new MeshPhysicalMaterial({
  transparent: true,
});

const GardenOG = (props: JSX.IntrinsicElements["group"]) => {
  // Local State
  const [gltfScene, setGltfScene] = useState<Group | null>(null);

  // Global State
  const { dynamicGarden } = useGlobalState(
    (state) => ({
      dynamicGarden: state.dynamicGarden,
    }),
    shallow,
  );

  // Hooks
  const { enable, intensity, gardenVisible, aoIntensity, colorMultiplier } =
    useControls({
      garden: folder(
        {
          gardenVisible: true,
          colorMultiplier: { r: 255, b: 255, g: 255 },
          aoIntensity: {
            value: 1,
            min: 0,
            max: 1.5,
            step: 0.000001,
          },
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
            max: 5,
            step: 0.0001,
          },
        },
        { collapsed: true },
      ),
    });

  // Handlers
  const handleOBC = useCallback((shader: Shader) => {
    shader.uniforms.uMultiplier = { value: new Vector3() };
    shader.uniforms.uAOMultiplier = { value: 0 };
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
            uniform float uAOMultiplier;
            
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
        vec3 finalColor = outgoingLight;
        vec3 withAO = finalColor * vAOMask.rgb;
        finalColor = mix(finalColor, withAO, uAOMultiplier);
        gl_FragColor = vec4(finalColor * uMultiplier, diffuseColor.a);
        `,
    );

    regMat.userData.shader = shader;
    // console.log(shader.fragmentShader);
  }, []);

  const handleOBCAlpha = useCallback((shader: Shader) => {
    shader.uniforms.uMultiplier = { value: new Vector3() };
    shader.uniforms.uAOMultiplier = { value: 0 };
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
            uniform float uAOMultiplier;
            
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
        vec3 finalColor = outgoingLight;
        vec3 withAO = finalColor * vAOMask.rgb;
        finalColor = mix(finalColor, withAO, uAOMultiplier);  
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
      regMat.userData.shader.uniforms.uAOMultiplier.value = aoIntensity;
    }

    if (alphaMat.userData.shader) {
      alphaMat.userData.shader.uniforms.uMultiplier.value = c;
      regMat.userData.shader.uniforms.uAOMultiplier.value = aoIntensity;
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
        <Garden />
      )}
    </group>
  );
};

export default memo(GardenOG);
