import Cookies from "js-cookie";
import { getAPI } from "../../../hooks/useAPI";
import { STORAGE_KEY_JWT } from "../../../pages/consts";

export const fetchEvents = async () => {
  const { api } = getAPI();

  const response = await api.appCalendarsMyCalendarEventsList(
    {},
    {
      headers: {
        Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
      },
    },
  );

  return response.data.items;
};
