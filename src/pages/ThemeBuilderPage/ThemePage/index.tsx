import { useEffect } from "react";

import { ContentBuilderOverview } from "../../../components/ContentBuilder/Overview";
import { useContentActions } from "../../../hooks/useContentActions";
import { useThemeStore } from "../../../stores/contentBuilderStore";
import { ContentBuilderType } from "../../types";

export const ThemePage = () => {
  const { getContent } = useContentActions();

  useEffect(() => {
    getContent(ContentBuilderType.THEMES);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContentBuilderOverview
      type={ContentBuilderType.THEMES}
      store={useThemeStore()}
    />
  );
};
