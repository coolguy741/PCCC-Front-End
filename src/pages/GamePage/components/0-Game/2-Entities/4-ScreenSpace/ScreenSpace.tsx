import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { FC, memo, useCallback, useMemo, useRef } from "react";
import {
  PlaneGeometry,
  RawShaderMaterial,
  RGBAFormat,
  Vector3,
  VideoTexture,
} from "three";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import { RefBooleanType, RefMeshType } from "../../../../shared/Types/RefTypes";

const pGeo = new PlaneGeometry(1, 1, 1, 1);

const vertexShader = /* glsl */ `
  precision highp float;
  uniform mat4 projectionMatrix;
  uniform mat4 modelViewMatrix;

  attribute vec2 uv;
  attribute vec3 position;

  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
    
  uniform float uTime;
  uniform sampler2D uTexture;
  uniform sampler2D uTextureIcon;

  uniform float uAlpha;

  varying vec2 vUv;

  float map(float value, float min1, float max1, float min2, float max2) {
      return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
  }

  void main() {
    vec3 pgTexture = texture2D(uTexture, vec2(vUv.x / 2.0, vUv.y)).rgb;
    vec3 pgIconTexture = texture2D(uTextureIcon, vec2(vUv.x / 2.0, vUv.y)).rgb;

    float pgMask = texture2D(uTexture, vec2(vUv.x / 2.0 + 0.5, vUv.y)).r;
    float pgIconMask = texture2D(uTextureIcon, vec2(vUv.x / 2.0 + 0.5, vUv.y)).r;


    float sides = 1.0 - pow(abs(vUv.x * 2.0625 - 1.03125), 20.0);
    float bottom = 1.0 - pow(abs(vUv.y - 1.005), 30.0);

    float finalAlpha = sides * bottom * pgMask;

    float radius = 0.3 * sin(uTime);

    float dist = length(vUv - 0.5);
    float gradient = 1.0 - smoothstep(radius, radius + 0.05, dist);

    vec3 finalColor = mix(pgTexture, pgIconTexture, pgIconMask * gradient * map(uTime, -1.0, 1.0, 0.0, 1.0));

    gl_FragColor = vec4(finalColor, pgMask * sides);
  //   gl_FragColor = vec4(pgIconTexture, gradient * map(uTime, -1.0, 1.0, 0.0, 1.0));
}
`;

const ScreenSpace: FC = () => {
  const r: RefBooleanType = useRef(false);
  const texture = useTexture("/game_assets/textures/icon_layer.jpg");

  // Global State
  const { pgVideo } = useGlobalState(
    (state) => ({
      pgVideo: state.pgVideo,
    }),
    shallow,
  );

  const pRef: RefMeshType = useRef(null);
  const { paparazziMaterial } = useMemo(() => {
    const pGTexture = new VideoTexture(pgVideo as HTMLVideoElement);
    pGTexture.format = RGBAFormat;

    const uniforms = {
      uTexture: { value: pGTexture },
      uTextureIcon: { value: texture },
      uTime: { value: -1 },
    };

    const paparazziMaterial = new RawShaderMaterial({
      transparent: true,
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });

    // @ts-ignore
    // pgVideo.addEventListener("loop", () => {

    // });

    return { paparazziMaterial };
  }, [pgVideo, texture]);

  const handleRadialMask = useCallback(() => {
    gsap.fromTo(
      paparazziMaterial.uniforms.uTime,
      { value: -1 },
      {
        value: 1,
        duration: 0.5,
        onComplete: () => {
          //   r.current = false;
        },
      },
    );
  }, [paparazziMaterial]);

  useFrame(({ camera, clock }) => {
    if (!pRef.current) return;
    pRef.current.position.copy(camera.position);
    pRef.current.position.addScaledVector(
      camera.getWorldDirection(new Vector3()),
      0.2,
    );
    pRef.current.lookAt(camera.position);
    pRef.current.quaternion.copy(camera.quaternion);

    // @ts-ignore
    if (pgVideo.currentTime > 2.1 && !r.current) {
      r.current = true;
      handleRadialMask();
    }
    // @ts-ignore
    if (pgVideo.currentTime <= 0.125) {
      r.current = false;
      paparazziMaterial.uniforms.uTime.value = -1;
    }
  });

  return (
    <mesh ref={pRef} scale={0.1} material={paparazziMaterial} geometry={pGeo} />
  );
};

export default memo(ScreenSpace);
