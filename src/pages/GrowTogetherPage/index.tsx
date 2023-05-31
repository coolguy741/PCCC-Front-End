import { TogetherPageTemplate } from "../../components/Home/TogetherPageTemplate";
import mockData from "../../lib/mockData/home/grow-together.json";

export const GrowTogetherPage = () => {
  return (
    <>
      <TogetherPageTemplate
        relatedTo={mockData.relatedTo}
        listData={mockData.listData}
      />
    </>
  );
};
