import { ChangeEvent } from "react";
import create from "zustand";

/**
 * This is a store that contains calendar events data.
 */
type SearchResult = {
  image: string;
  title: string;
  content: string;
  path: string;
};

const listData = [
  {
    image: "/images/homepage/discover-item.jpg",
    title: "Follow the Foodway",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, flour sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
    path: "/dashboard/foodways/Chocolate",
  },
  {
    image: "/images/homepage/discover-item.jpg",
    title: "Flour Power",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed flour do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
    path: "/dashboard/foodways/Chocolate",
  },
  {
    image: "/images/homepage/discover-item.jpg",
    title: "Over the grain bow",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud flour...",
    path: "/dashboard/foodways/Chocolate",
  },
];

const initialState = {
  searchKey: "",
};

export const useSearchResultsStore = create<{
  results: SearchResult[];
  searchKey: string;
  addResults: () => void;
  reset: () => void;
  handleChangeSearchKey: (event: ChangeEvent<HTMLInputElement>) => void;
}>((set) => ({
  ...initialState,
  results: [],
  reset: () => set((state) => ({ ...initialState })),
  handleChangeSearchKey: ({ target: { value } }) =>
    set((state) => ({ ...state, searchKey: value })),
  addResults: () => set((state) => ({ ...state, results: [...listData] })),
}));
