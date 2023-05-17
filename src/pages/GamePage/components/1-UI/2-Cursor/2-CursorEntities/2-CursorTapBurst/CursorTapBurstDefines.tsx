import {
  AdditiveBlending,
  CircleGeometry,
  FrontSide,
  RawShaderMaterial,
} from "three";

const tapBurstVertexShader = /* glsl */ `
precision highp float;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

attribute vec2 uv;
attribute vec3 position;

varying vec2 vUv;
varying vec3 vPos;

    void main() {
        vUv = uv;
        vPos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const tapBurstFragmentShader = /* glsl */ `
    precision highp float;  

    varying vec2 vUv;
    varying vec3 vPos;

    uniform float uTime;

    void main() {
        float angle = atan(vUv.y - 0.5, vUv.x - 0.5);
        float radius = distance(vUv, vec2(0.5));
        float radiusT = distance(vUv * 2.0, vec2(1.0));
        float radiusC = distance(vUv * 3.0, vec2(1.5));
        float normalizedAngle = angle * 0.5 / 3.14159265 + 0.5;
        float stripeValue = floor(normalizedAngle * 16.0);
        float visible = mod(stripeValue, 2.0);
        float gradient = 1.0 - smoothstep(0.4, 0.45, radius);
        float alphaGradient = 1.0 - smoothstep(uTime - 0.05, 1.0, radiusT);
        float alphaGradientT = smoothstep(uTime - 0.5, 2.0, radiusT);
        float alphaGradientC = 1.0 - smoothstep(-uTime, 0.5, radiusC);
        float coo = 1.0 - step(0.0, length(vPos));
        float finalAlpha = visible * gradient * pow(alphaGradient, 5.0) * alphaGradientT * 15.0;
        vec3 finalColor = vec3(1.0);
        finalColor = mix(finalColor, vec3(1.0, 0.96, 0.5), visible * gradient);
        finalColor = mix(finalColor, vec3(1.0), alphaGradientC);
        gl_FragColor = vec4(finalColor, finalAlpha);
    }
`;

const uniforms = {
  uTime: { value: -3 },
};

const tapBurstGeometry = new CircleGeometry(0.5, 8, 0, Math.PI * 2);

const tapBurstMaterial = new RawShaderMaterial({
  side: FrontSide,
  transparent: true,
  depthWrite: false,
  uniforms: uniforms,
  vertexShader: tapBurstVertexShader,
  fragmentShader: tapBurstFragmentShader,
  blending: AdditiveBlending,
});

export {
  tapBurstGeometry,
  tapBurstMaterial,
  tapBurstVertexShader,
  tapBurstFragmentShader,
};
