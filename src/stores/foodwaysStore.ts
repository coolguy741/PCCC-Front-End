import { create } from "zustand";
import { CCFormat, State } from "../components/ContentCreation/types";
import { PccServer23FoodwaysFoodwayDto } from "../lib/api/api";

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
  setFoodway: (foodway: PccServer23FoodwaysFoodwayDto) => void;
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
  currentStep: 0,
  slideIndex: 0,
  currentLang: "en",
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
  setFoodway: ({
    title,
    info,
    description,
    concurrencyStamp,
    foodwayStops,
    id,
    featureDate,
  }) =>
    set((state) => {
      const data = {
        title: title ?? "",
        info: info ?? "",
        description: description ?? "",
        featureDate: featureDate ?? new Date().toISOString(),
        stops: foodwayStops?.map(
          ({ timePeriod, image, description, location, id }) =>
            ({
              id,
              title: location ?? "",
              description: description ?? "",
              time: timePeriod ?? "",
              image,
              componentState: {
                title: {
                  mode: "view",
                  text: location || "Click to edit",
                },
                desc: {
                  mode: "view",
                  text: description || "Click to edit.",
                },
                timePeriod: {
                  mode: "view",
                  text: "Click to edit.",
                },
              } as State,
            } ?? []),
        ),
      };
      return {
        ...state,
        id,
        concurrencyStamp,
        en: {
          ...data,
          componentState: {
            desc: { mode: "view", text: description || "Click to edit" },
            heading: { mode: "edit", text: title || "Click to edit" },
            tag: { mode: "view", text: "Overview" },
          } as State,
        },
        fr: {
          ...data,
          componentState: {
            desc: { mode: "view", text: description || "Click to edit" },
            heading: { mode: "edit", text: title || "Click to edit" },
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
