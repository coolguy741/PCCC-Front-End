import { memo, useMemo } from "react";
import StaticSVGLoaderStyleContainer from "./StaticSVGLoaderStyleContainer";

// Types
interface StaticSVGLoaderPropTypes {
  id: string;
  svgPath: string;
}

const StaticSVGLoader = ({ id, svgPath }: StaticSVGLoaderPropTypes) => {
  // Defines
  const svgUrl = useMemo((): string => {
    return `data:image/svg+xml,${encodeURIComponent(svgPath)}`;
  }, [svgPath]);

  return (
    <StaticSVGLoaderStyleContainer className={id}>
      <object
        data={svgUrl}
        type="image/svg+xml"
        style={{ width: "100%", height: "100%" }}
      >
        {svgPath}
      </object>
      <div className="svg-enable" />
    </StaticSVGLoaderStyleContainer>
  );
};

export default memo(StaticSVGLoader);
