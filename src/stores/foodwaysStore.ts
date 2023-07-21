import { create } from "zustand";
import { CCFormat, State } from "../components/ContentCreation/types";
import { PccServer23SharedIMultiLingualDto1PccServer23FoodwaysPublicFoodwayDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull } from "../lib/api/api";

import { Language, ThemeComponent } from "../pages/types";

interface IFoodwayStop {
  title?: string;
  id?: string;
  description?: string;
  time?: string;
  image?: string | null;
  componentState?: State;
}

interface FoodwayProp {
  id?: string;
  concurrencyStamp?: string | null;
  maxPageCount: number;
  currentStep: number;
  currentLang: Language;
  slideIndex: number;
  currentSlide: ThemeComponent[];
  activityIds: string[];
  recipeIds: string[];
  en: {
    title?: string;
    description?: string;
    info?: string;
    featureDate?: string;
    stops?: IFoodwayStop[];
    componentState?: State;
  };
  fr: {
    title?: string;
    description?: string;
    info?: string;
    featureDate?: string;
    stops?: IFoodwayStop[];
    componentState?: State;
  };
}

export interface FoodwayStore extends FoodwayProp {
  init: () => void;
  addFoodwaySlide: () => void;
  setFoodway: (
    foodway: PccServer23SharedIMultiLingualDto1PccServer23FoodwaysPublicFoodwayDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
  ) => void;
  deleteSlide: () => void;
  getFoodwaySlide?: (index: number) => void;
  setLang: (lang: Language) => void;
  activeSlide: number;
  setActiveSlide: (slide: number) => void;
  totalSlides: number;
  setTotalSlides: (totalSlides: number) => void;
  title: string;
  description: string;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  stopTitle: string[] | undefined[];
  setStopTitle: (stopTitle: string[] | undefined[]) => void;
  stopDescription: string[] | undefined[];
  setStopDescription: (stopDescription: string[] | undefined[]) => void;
  stopTime: string[] | undefined[];
  setStopTime: (stopTime: string[] | undefined[]) => void;
  updatePageState: (slideIndex: number, index: number, state: State) => void;
}

const initialState: FoodwayProp = {
  maxPageCount: 1,
  id: undefined,
  currentStep: 0,
  slideIndex: 0,
  currentLang: Language.EN,
  currentSlide: [],
  activityIds: [],
  recipeIds: [],
  en: {},
  fr: {},
};

export const useFoodwayStore = create<FoodwayStore>()((set) => ({
  ...initialState,
  totalSlides: 1,
  activeSlide: 0,
  setFoodway: ({ english, french }) =>
    set((state) => {
      return {
        ...state,
        id: english?.id || french?.id,
        concurrencyStamp: english?.concurrencyStamp || french?.concurrencyStamp,
        en: {
          ...english,
          title: english?.title || "Click to Edit",
          description: english?.description || "Click to Edit",
          info: english?.info || "Click to Edit",
          componentState: {
            desc: {
              mode: "view",
              text: english?.description || "Click to edit",
            },
            heading: { mode: "edit", text: english?.title || "Click to edit" },
            tag: { mode: "view", text: "Overview" },
          } as State,
        },
        fr: {
          ...french,
          title: french?.title || "Click to Edit",
          description: french?.description || "Click to Edit",
          info: french?.info || "Click to Edit",
          componentState: {
            desc: {
              mode: "view",
              text: french?.description || "Click to edit",
            },
            heading: { mode: "edit", text: french?.title || "Click to edit" },
            tag: { mode: "view", text: "Overview" },
          } as State,
        },
      };
    }),
  setActiveSlide: (activeSlide) => set(() => ({ activeSlide })),
  deleteSlide: () =>
    set(({ activeSlide, currentLang, ...state }) => ({
      [currentLang]: {
        ...state[currentLang],
        stops: [
          ...(state[currentLang].stops?.filter(
            (stop, index) => index !== activeSlide - 1,
          ) ?? []),
        ].filter(Boolean),
      },
    })),
  updatePageState: (sIndex, componentIndex, componentState) =>
    set(({ currentLang, activeSlide, ...state }) => {
      if (!sIndex) {
        state[currentLang].title = (
          componentState as Record<string, CCFormat>
        ).heading.text;
        state[currentLang].description = (
          componentState as Record<string, CCFormat>
        ).desc.text;
        state[currentLang].componentState = componentState;
      } else {
        if (!componentIndex) {
          state[currentLang].stops =
            state[currentLang].stops?.map((stop, index) =>
              index === sIndex - 1
                ? {
                    ...stop,
                    title: (componentState as Record<string, CCFormat>).title
                      .text,
                    description: (componentState as Record<string, CCFormat>)
                      .desc.text,
                    componentState,
                  }
                : stop,
            ) ?? [];
        } else {
          state[currentLang].stops = state[currentLang].stops?.map(
            (stop, index) =>
              index === activeSlide - 1
                ? {
                    ...stop,
                    time: (componentState as Record<string, any>)[
                      `stop${activeSlide}`
                    ].text,
                  }
                : stop,
          );
        }
      }
      return { ...state };
    }),
  setLang: (currentLang: Language) =>
    set(() => ({
      currentLang,
    })),
  init: () => set(() => ({ ...initialState, en: {}, fr: {} })),
  addFoodwaySlide: () =>
    set(({ currentLang, ...state }) => ({
      slideIndex: state[currentLang].stops?.length ?? 0 + 1,
      [currentLang]: {
        ...state[currentLang],
        stops: [...(state[currentLang].stops ?? []), []],
      },
    })),
  setTotalSlides: (totalSlides: number) =>
    set(() => ({ totalSlides: totalSlides })),
  title: "",
  description: "",
  setTitle: (title: string) => set(() => ({ title })),
  setDescription: (description: string) => set(() => ({ description })),
  stopTitle: [],
  setStopTitle: (stopTitle: string[] | undefined[]) =>
    set(({ stopTitle }) => ({
      stopTitle,
    })),
  stopDescription: [],
  setStopDescription: (stopDescription: string[] | undefined[]) =>
    set(({ stopDescription }) => ({
      stopDescription,
    })),
  stopTime: [],
  setStopTime: (stopTime: string[] | undefined[]) =>
    set(({ stopTime }) => ({
      stopTime,
    })),
}));
