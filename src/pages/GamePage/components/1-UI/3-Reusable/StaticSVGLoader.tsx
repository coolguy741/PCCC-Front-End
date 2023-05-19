import { memo, useMemo } from "react";
import { CSSProperties } from "styled-components";

// Types
interface StaticSVGLoaderPropTypes {
  id: string;
  svgPath: string;
  dynamicSizing?: boolean;
}

interface SVGParamsReturnType {
  svgUrl: string;
  styleObject?: CSSProperties;
}

const StaticSVGLoader = ({
  id,
  svgPath,
  dynamicSizing = false,
}: StaticSVGLoaderPropTypes) => {
  // Defines
  const { svgUrl, styleObject } = useMemo((): SVGParamsReturnType => {
    const svgUrl = `data:image/svg+xml,${encodeURIComponent(svgPath)}`;
    const styleObject = dynamicSizing
      ? { width: "100%", height: "100%" }
      : undefined;

    return {
      svgUrl,
      styleObject,
    };
  }, [svgPath, dynamicSizing]);

  return (
    <object
      data={svgUrl}
      className={id}
      style={styleObject}
      type="image/svg+xml"
      //   onLoad={handleLoad}
    >
      {svgPath}
    </object>
  );
};

export default memo(StaticSVGLoader);
