import { useEffect } from "react";

import { ContentBuilderPrintPage } from "../../../../components/ContentBuilder/Components/Print";
import { useContentActions } from "../../../../hooks/useContentActions";
import { useActivitiesStore } from "../../../../stores/contentBuilderStore";
import { ContentBuilderType } from "../../../types";

export const ActivityPrintPage = () => {
  const { getContent } = useContentActions();
  const activityStore = useActivitiesStore();

  useEffect(() => {
    getContent(ContentBuilderType.ACTIVITIES);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ContentBuilderPrintPage store={activityStore} />;
};
