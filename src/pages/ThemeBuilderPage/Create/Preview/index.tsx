import { ContentBuilderPreview } from "../../../../components/ContentBuilder/Preview";
import { useThemeStore } from "../../../../stores/themeStore";
import { ContentBuilderType } from "../../../types";

export const ThemePreviewPage = () => {
  return (
    <ContentBuilderPreview
      type={ContentBuilderType.THEMES}
      store={useThemeStore()}
    />
  );
};
