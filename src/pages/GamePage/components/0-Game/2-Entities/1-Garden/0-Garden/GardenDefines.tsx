import { MeshPhysicalMaterial, Shader, Vector3 } from "three";

const gardenMaterial = new MeshPhysicalMaterial();

const gardenMaterialOBC = (shader: Shader) => {
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

  gardenMaterial.userData.shader = shader;
};

const gardenColorMultiplier = new Vector3();

export { gardenMaterial, gardenMaterialOBC, gardenColorMultiplier };
