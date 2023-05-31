import { TogetherPageTemplate } from "../../components/Home/TogetherPageTemplate";
import mockData from "../../lib/mockData/home/cook-together.json";

export const CookTogetherPage = () => {
  return (
    <>
      <TogetherPageTemplate
        relatedTo={mockData.relatedTo}
        listData={mockData.listData}
      />
    </>
  );
};
