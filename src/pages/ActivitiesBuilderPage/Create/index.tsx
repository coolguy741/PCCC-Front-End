import { ContentBuilder } from "../../../components/ContentBuilder";
import { useActivitiesStore } from "../../../stores/activitiesStore";
import { ContentBuilderType } from "../../types";

export const ActivitiesCreatePage = () => {
  return (
    <ContentBuilder
      type={ContentBuilderType.ACTIVITIES}
      store={useActivitiesStore()}
    />
  );
};
