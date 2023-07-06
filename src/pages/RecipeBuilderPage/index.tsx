import { ContentListAdminPageTemplate } from "../../components/Global/ContentListAdminPageTemplate";
import mockData from "../../lib/mockData/activities/activities.json";

export const RecipesPage = () => {
  const handleSelectionChange = (id: string, isSelected: boolean) => {
    return;
  };

  return (
    <ContentListAdminPageTemplate
      title={"Recipe"}
      selectsGroup={["Curriculum", "Topic", "Sort"]}
      listData={mockData.activities}
      onSelectionChange={handleSelectionChange}
    />
  );
};
