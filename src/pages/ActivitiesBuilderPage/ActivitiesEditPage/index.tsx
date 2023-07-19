import { ContentBuilder } from "../../../components/ContentBuilder";
import { useActivitiesStore } from "../../../stores/contentBuilderStore";
import { ContentBuilderType } from "../../types";

export const ActivitiesEditPage = () => {
  return (
    <ContentBuilder
      type={ContentBuilderType.ACTIVITIES}
      store={useActivitiesStore()}
    />
  );
};
