import { ContentBuilderPreview } from "../../../components/ContentBuilder/Preview";
import { useActivitiesStore } from "../../../stores/activitiesStore";
import { ContentBuilderType } from "../../types";

export const MealtimeMomentsPreviewPage = () => {
  return (
    <ContentBuilderPreview
      type={ContentBuilderType.MEALTIME_MOMENTS}
      store={useActivitiesStore()}
    />
  );
};
