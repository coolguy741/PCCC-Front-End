import { useEffect } from "react";

import { ContentBuilderOverview } from "../../../components/ContentBuilder/Overview";
import { useContentActions } from "../../../hooks/useContentActions";
import { useActivitiesStore } from "../../../stores/contentBuilderStore";
import { ContentBuilderType } from "../../types";

export const ActivityPage = () => {
  const { getContent } = useContentActions();

  useEffect(() => {
    getContent(ContentBuilderType.ACTIVITIES);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContentBuilderOverview
      type={ContentBuilderType.ACTIVITIES}
      store={useActivitiesStore()}
    />
  );
};
