import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { ContentBuilder } from "../../../components/ContentBuilder";
import { useContentActions } from "../../../hooks/useContentActions";
import { useActivitiesStore } from "../../../stores/contentBuilderStore";
import { ContentBuilderType } from "../../types";

export const ActivitiesCreatePage = () => {
  const { getContent } = useContentActions();
  const { item } = useParams();
  const store = useActivitiesStore();

  useEffect(() => {
    item && getContent(ContentBuilderType.ACTIVITIES);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  return <ContentBuilder type={ContentBuilderType.ACTIVITIES} store={store} />;
};
