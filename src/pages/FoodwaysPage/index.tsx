import { ContentListAdminPageTemplate } from "../../components/Global/ContentListAdminPageTemplate";
import mockData from "../../lib/mockData/foodways/foodways.json";

export const FoodwaysPage = () => {
  const handleSelectionChange = (id: number, isSelected: boolean) => {
    return;
  };

  return (
    <ContentListAdminPageTemplate
      title={"Foodways"}
      selectsGroup={["Sort"]}
      listData={mockData.foodways}
      onSelectionChange={handleSelectionChange}
    />
  );
};
