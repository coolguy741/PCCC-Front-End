import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';

export const Globe = () => {
  return (
    <Style.Container>
      <Canvas>
        <OrbitControls />
        <mesh>
          <sphereBufferGeometry args={[2.5, 16, 16]} />
          <meshBasicMaterial color="blue" />
        </mesh>
      </Canvas>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div``,
};
