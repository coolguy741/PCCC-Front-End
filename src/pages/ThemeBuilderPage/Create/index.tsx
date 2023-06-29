import { ContentBuilder } from "../../../components/ContentBuilder";
import { useThemeStore } from "../../../stores/themeStore";
import { ContentBuilderType } from "../../types";

export const ThemeCreatePage = () => {
  return (
    <ContentBuilder type={ContentBuilderType.THEMES} store={useThemeStore()} />
  );
};
