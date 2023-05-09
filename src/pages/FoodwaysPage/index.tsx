import Cookies from "js-cookie";
import { ContentListAdminPageTemplate } from "../../components/Global/ContentListAdminPageTemplate";
import { Api } from "../../lib/api/api";
import { BASE_API_URL } from "../../lib/api/helpers/consts";
import mockData from "../../lib/mockData/foodways/foodways.json";
import { STORAGE_KEY_JWT } from "../consts";

export const foodwaysPageLoader = async () => {
  const { api } = new Api({
    baseUrl: BASE_API_URL,
  });

  try {
    const response = await api.appFoodwaysList(
      {},
      {
        headers: {
          Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
        },
      },
    );

    console.log("Foodways", response);
  } catch (error: any) {
    console.warn(error);
  }

  return null;
};

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
