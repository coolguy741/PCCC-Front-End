import {
  CineonToneMapping,
  sRGBEncoding,
  TextureEncoding,
  ToneMapping,
} from "three";

export interface GLParamTypes {
  depth: boolean;
  alpha: boolean;
  stencil: boolean;
  antialias: boolean;
  autoClear: boolean;
  autoClearDepth: boolean;
  powerPreference: string;
  toneMapping: ToneMapping;
  toneMappingExposure: number;
  outputEncoding: TextureEncoding;
  debug: { checkShaderErrors: boolean };
}

const GLParameters: GLParamTypes = {
  depth: true,
  alpha: true,
  stencil: true,
  antialias: true,
  autoClear: false,
  autoClearDepth: false,
  toneMappingExposure: 1,
  outputEncoding: sRGBEncoding,
  toneMapping: CineonToneMapping,
  debug: { checkShaderErrors: true },
  powerPreference: "high-performance",
};

export { GLParameters };
