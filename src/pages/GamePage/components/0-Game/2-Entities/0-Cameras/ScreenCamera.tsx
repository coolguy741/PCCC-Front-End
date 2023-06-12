import { OrthographicCamera } from "@react-three/drei";
import { FC, memo } from "react";

const ScreenCamera: FC = () => {
  return <OrthographicCamera makeDefault zoom={100} />;
};

export default memo(ScreenCamera);
