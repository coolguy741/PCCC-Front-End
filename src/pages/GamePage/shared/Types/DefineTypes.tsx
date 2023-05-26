import { RootState } from "@react-three/fiber";

export type ConstantVoidFunctionType = () => void;
export type ConstantDampFunctionType = (step: number, delta: number) => void;
export type R3FUseFrameFunctionType = (state: RootState, delta: number) => void;
export type FramerAnimFrameFunctionType = (time: number, delta: number) => void;
