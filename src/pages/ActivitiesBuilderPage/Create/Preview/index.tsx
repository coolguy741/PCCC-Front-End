import { ContentBuilderPreview } from "../../../../components/ContentBuilder/Preview";
import { useActivitiesStore } from "../../../../stores/activitiesStore";
import { ContentBuilderType } from "../../../types";

export const ActivitiesPreviewPage = () => {
  return (
    <ContentBuilderPreview
      type={ContentBuilderType.ACTIVITIES}
      store={useActivitiesStore()}
    />
  );
};
