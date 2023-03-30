import { Size, useFrame, useThree } from "@react-three/fiber";
import { memo, useMemo } from "react";
import { PerspectiveCamera, Scene, Vector2 } from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
// import { SMAAPass} from "three/examples/jsm/postprocessing/SMAAPass";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
// import { LuminosityHighPassShader } from "three/examples/jsm/shaders/LuminosityHighPassShader";

import { ExtendedWebGLRenderer } from "../../../1-XR8/0-XR8Provider/XR8Provider";
import { UnrealAlphaBloomPass } from "./UnrealAlphaBloomPass";

const params = {
  exposure: 50,
  strength: 1.5,
  threshold: 0,
  radius: 0,
};

const PostProcessing = () => {
  // Three
  const size = useThree((state) => state.size) as Size;
  const scene = useThree((state) => state.scene) as Scene;
  const invalidate = useThree((state) => state.invalidate);
  const gl = useThree((state) => state.gl) as ExtendedWebGLRenderer;
  const camera = useThree((state) => state.camera) as PerspectiveCamera;

  // const composerRef: MutableRefObject<EffectComposer | null> = useRef(null);

  const { composer } = useMemo(() => {
    const renderPass = new RenderPass(scene, camera);
    const bloomPass = new UnrealAlphaBloomPass(
      new Vector2(size.width, size.height),
      0.5,
      8,
      0,
    );

    const composer = new EffectComposer(gl);

    // composer.renderToScreen = false;
    composer.addPass(renderPass);
    composer.addPass(bloomPass);

    return { composer };
  }, [gl, scene, camera]);

  useFrame((state, delta) => {
    // gl.setRenderTarget(null);
    // state.gl.copyFramebufferToTexture(new Vector2(2048, 2048), cameraTexture);
    // if (sceneTarget) {
    //   state.gl.setRenderTarget(sceneTarget);
    // }
    // composer.render();
    // finalComposer.render();
    // gl.setRenderTarget(null);
    // gl.clear();
    // invalidate();
    // invalidate();
    // if (composer) {
    composer.render(delta);
    // }
  });

  return null;
};

export default memo(PostProcessing);

// const vertexShader = `
// precision highp float;

// varying vec2 vUv;

// void main() {
//     vUv = uv;
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
// }
// `;

// const fragmentShader = `
//   uniform sampler2D cameraTexture;
//   uniform sampler2D tDiffuse; // Scene contents
//   uniform sampler2D bloomTexture;
//   uniform vec2 u_resolutionRatio;
//   uniform bool useAdditiveBlend;

//   varying vec2 vUv;

//   vec4 normalBlend(vec4 x, vec4 y, float opacity) {
//     return y * opacity + x * (1.0 - opacity);
//   }

//   void main(void) {
//     vec4 cameraColor = texture2D( cameraTexture, vUv);
//     vec4 sceneColor = texture2D( tDiffuse, vUv);
//     vec4 bloomColor = texture2D( bloomTexture, vUv);

//     // gl_FragColor = normalBlend(cameraColor, sceneColor, sceneColor.a);
//     // gl_FragColor += bloomColor;
//     gl_FragColor += bloomColor;
//     gl_FragColor = vec4(length(cameraColor.rgb), length(bloomColor.rgb), length(sceneColor.rgb), 1.); // Shows camera in red and scene in blue
//   }
// `;

// const combineShader = {
//   uniforms: {
//     tDiffuse: { value: null },
//     useAdditiveBlend: { value: false },
//     cameraTexture: { value: undefined },
//   },
//   vertexShader: vertexShader,
//   fragmentShader: fragmentShader,
// };

// const sceneTarget = new WebGLRenderTarget(size.width, size.height, {
//   generateMipmaps: false,
// });

// const composer = new EffectComposer(gl);
// composer.renderToScreen = false;

// const copyPass = new TexturePass(sceneTarget.texture);
// composer.addPass(copyPass);

// const bloomPass = new UnrealAlphaBloomPass(
//   new Vector2(size.width, size.height),
//   1.5,
//   0.4,
//   0.85,
// );
// // @ts-ignore
// bloomPass.clearColor = new Color(0xffffff);
// // @ts-ignore
// bloomPass.threshold = params.threshold;
// // @ts-ignore
// bloomPass.strength = params.strength;
// // @ts-ignore
// bloomPass.radius = params.radius;

// composer.addPass(bloomPass);

// const finalComposer = new EffectComposer(gl);
// finalComposer.addPass(copyPass);

// const combinePass = new ShaderPass(combineShader);
// combinePass.clear = false;
// combinePass.renderToScreen = true;
// finalComposer.addPass(combinePass);

// const cameraTexture = new DataTexture(
//   new Uint8Array(size.width * size.height * 3),
//   size.width,
//   size.height,
//   RGBAFormat,
// );
