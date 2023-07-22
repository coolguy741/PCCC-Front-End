import { ContentBuilderPreview } from "../../../../components/ContentBuilder/Preview";
import { useThemeStore } from "../../../../stores/contentBuilderStore";
import { ContentBuilderType } from "../../../types";

export const ThemePreviewPage = () => {
  return (
    <ContentBuilderPreview
      type={ContentBuilderType.THEMES}
      store={useThemeStore()}
    />
  );
};
