import { ContentListAdminPageTemplate } from "../../components/Global/ContentListAdminPageTemplate";
import mockData from "../../lib/mockData/activities/activities.json";

export const ActivitiesPage = () => {
  const handleSelectionChange = (id: number, isSelected: boolean) => {
    return;
  };

  return (
    <ContentListAdminPageTemplate
      title={"Activity"}
      selectsGroup={["Curriculum", "Topic", "Sort"]}
      listData={mockData.activities}
      onSelectionChange={handleSelectionChange}
    />
  );
};
