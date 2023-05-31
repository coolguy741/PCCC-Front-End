import { TogetherPageTemplate } from "../../components/Home/TogetherPageTemplate";
import mockData from "../../lib/mockData/home/discover-together.json";

export const DiscoverTogetherPage = () => {
  return (
    <>
      <TogetherPageTemplate
        relatedTo={mockData.relatedTo}
        listData={mockData.listData}
      />
    </>
  );
};
