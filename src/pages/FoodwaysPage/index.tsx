import Cookies from "js-cookie";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FoodwaysListTemplate } from "../../components/Foodways/FoodwaysListTemplate";
import { Api, PccServer23FoodwaysFoodwayDto } from "../../lib/api/api";
import { BASE_API_URL } from "../../lib/api/helpers/consts";
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

    if (response.status === 200) {
      return response.data.items;
    }
  } catch (error: any) {
    console.warn(error);
  }

  return null;
};

export const FoodwaysPage = () => {
  const foodways = useLoaderData() as PccServer23FoodwaysFoodwayDto[];
  const [isSelected, setIsSelected] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const handleSelectionChange = (id: string, isSelected: boolean) => {
    setSelectedId(id);

    return;
  };

  return (
    <FoodwaysListTemplate
      title={"Foodways"}
      selectsGroup={["Sort"]}
      listData={foodways}
      onSelectionChange={handleSelectionChange}
      isSelected={isSelected}
      setIsSelected={setIsSelected}
      selectedId={selectedId}
    />
  );
};
