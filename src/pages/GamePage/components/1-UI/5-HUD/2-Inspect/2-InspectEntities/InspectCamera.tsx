import { PerspectiveCamera } from "@react-three/drei";
import { FC, memo } from "react";

const InspectCamera: FC = () => {
  return <PerspectiveCamera makeDefault position={[0, 0, 6.5]} />;
};

export default memo(InspectCamera);
