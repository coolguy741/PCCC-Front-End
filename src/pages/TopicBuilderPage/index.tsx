import { ContentBuilder } from "../../components/ContentBuilder";

export const Topics = () => {
  const handleSelectionChange = (id: number, isSelected: boolean) => {
    return;
  };

  return (
    // <ContentListAdminPageTemplate
    //   title={"Topic"}
    //   selectsGroup={["Topic", "Sort"]}
    //   listData={mockData.activities}
    //   onSelectionChange={handleSelectionChange}
    // />
    <ContentBuilder />
  );
};
