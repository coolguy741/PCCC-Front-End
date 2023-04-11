import { Canvas } from '@react-three/fiber';
import { FC, memo, ReactNode, Suspense, useMemo } from 'react';
import { MathUtils } from 'three';
import { GLParameters } from './GLParameters';

interface GameCanvasPropTypes {
  children: ReactNode;
}

const GameCanvas: FC<GameCanvasPropTypes> = ({ children }) => {
  // Hooks
  const devicePixelRatio = useMemo(() => {
    return MathUtils.clamp(window.devicePixelRatio, 1, 2);
  }, []);

  return (
    <Canvas shadows gl={GLParameters} dpr={devicePixelRatio}>
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
};

export default memo(GameCanvas);
