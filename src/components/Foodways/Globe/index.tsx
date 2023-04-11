import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';

export const Globe = () => {
  return (
    <Container>
      <Canvas>
        <OrbitControls />
        <mesh>
          <sphereBufferGeometry args={[2.5, 16, 16]} />
          <meshBasicMaterial color="blue" />
        </mesh>
      </Canvas>
    </Container>
  );
};

const Container = styled.div``;
