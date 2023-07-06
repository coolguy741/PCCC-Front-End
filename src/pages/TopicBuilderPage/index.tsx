import { ContentListAdminPageTemplate } from "../../components/Global/ContentListAdminPageTemplate";
import mockData from "../../lib/mockData/activities/activities.json";

export const Topics = () => {
  const handleSelectionChange = (id: string, isSelected: boolean) => {
    return;
  };

  return (
    <ContentListAdminPageTemplate
      title={"Topic"}
      selectsGroup={["Topic", "Sort"]}
      listData={mockData.activities}
      onSelectionChange={handleSelectionChange}
    />
  );
};
