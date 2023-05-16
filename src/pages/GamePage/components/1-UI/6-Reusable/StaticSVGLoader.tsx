import { memo, useMemo } from "react";

interface StaticSVGLoaderPropTypes {
  id: string;
  svgPath: string;
  dynamicSizing?: boolean;
}

const StaticSVGLoader = ({
  id,
  svgPath,
  dynamicSizing = false,
}: StaticSVGLoaderPropTypes) => {
  const svgUrl = useMemo(() => {
    return `data:image/svg+xml,${encodeURIComponent(svgPath)}`;
  }, [svgPath]);

  return (
    <object
      data={svgUrl}
      className={id}
      //   onLoad={handleLoad}
      type="image/svg+xml"
      style={dynamicSizing ? { width: "100%", height: "100%" } : undefined}
    >
      {svgPath}
    </object>
  );
};

export default memo(StaticSVGLoader);
