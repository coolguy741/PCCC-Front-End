import { ContentListAdminPageTemplate } from "../../../components/Global/ContentListAdminPageTemplate";
import mockData from "../../../lib/mockData/activities/activities.json";

export const MealTimeMomentsPage = () => {
  const handleSelectionChange = (id: number, isSelected: boolean) => {
    return;
  };

  return (
    <ContentListAdminPageTemplate
      title={"Mealtime Moments"}
      selectsGroup={["Sort"]}
      listData={mockData.activities}
      onSelectionChange={handleSelectionChange}
    />
  );
};
