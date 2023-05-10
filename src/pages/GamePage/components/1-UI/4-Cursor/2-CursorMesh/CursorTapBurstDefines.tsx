import {
  AdditiveBlending,
  CircleGeometry,
  FrontSide,
  RawShaderMaterial,
} from "three";

const tapBurstVertexShader = `
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

const tapBurstFragmentShader = `
    precision highp float;  

    varying vec2 vUv;
    varying vec3 vPos;

    uniform float uTime;

    float calcPulseWave(float dx) {
        return (dx - floor(dx));
    }

    float handlePulseWaveMask(vec2 uv, float startRadius, float rangeSize, float aTime) {
        float time = 0.5 + aTime * 0.45;
        float ease = calcPulseWave(0.5 + time);
        float radius = startRadius - ease * rangeSize;
        float dist = length(uv * 3.0 - 1.5);
        float eoo = 1.0 - step(0.4 / radius, dist);
        float e = smoothstep(0.2 / radius, 0.5 / radius, dist);
        float opacity = (1.0 - smoothstep(0.5, 0.9, ease));
        return mix(0.0, 1.0, e * eoo * opacity);
    }

    void main() {
        float angle = atan(vUv.y - 0.5, vUv.x - 0.5);

        float radius = distance(vUv, vec2(0.5));

        float normalizedAngle = angle * 0.5 / 3.14159265 + 0.5;

        float stripeValue = floor(normalizedAngle * 16.0);

        float visible = mod(stripeValue, 2.0);

        float gradient = 1.0 - smoothstep(0.4, 0.45, radius);

        float alphaGradient = 1.0 - smoothstep(uTime, 0.5, radius);

        float coo = 1.0 - step(uTime - 0.1, length(vPos));

        float finalAlpha = visible * gradient * alphaGradient + coo;

        vec3 finalColor = vec3(1.0);
        finalColor = mix(finalColor, vec3(1.0, 0.86, 0.0), visible * gradient);
        finalColor = mix(finalColor, vec3(1.0), coo * 0.7);


        gl_FragColor = vec4(finalColor, finalAlpha);
    }
`;

const uniforms = {
  uTime: { value: 2 },
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
