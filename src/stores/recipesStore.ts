import { create } from "zustand";

import { components } from "../components/ContentBuilder/Components/Cards";
import {
  CCFormat,
  State as ComponentState,
} from "../components/ContentCreation/types";
import { PccServer23CurriculumRecipesCurriculumRecipeDto } from "../lib/api/api";
import { IContent, Language, ThemeComponent } from "../pages/types";

interface ThemeProp {
  id?: string;
  maxPageCount: number;
  recipes?: PccServer23CurriculumRecipesCurriculumRecipeDto[] | null;
  currentStep: number;
  currentLang: Language;
  slideIndex: number;
  concurrencyStamp?: string;
  contents: IContent[];
  tags?: string[];
  en: {
    name?: string;
    title?: string;
    topic?: string;
    description?: string;
    jsonData: IContent[];
  };
  fr: {
    name?: string;
    title?: string;
    topic?: string;
    description?: string;
    jsonData: IContent[];
  };
}
export interface RecipesStoreState extends ThemeProp {
  updateDetail: (detail: {
    contents: IContent[];
    id: string;
    concurrencyStamp: string;
    en?: {
      title?: string;
      topic?: string;
      description?: string;
      jsonData?: IContent[];
    };
    fr?: {
      title?: string;
      topic?: string;
      description?: string;
      jsonData?: IContent[];
    };
  }) => void;
  changeStep: (step: number) => void;
  addSlide: () => void;
  updatePage: (slide: ThemeComponent[]) => void;
  updatePageState: (
    slideIndex: number,
    index: number,
    state: ComponentState,
  ) => void;
  setLang: (lang: Language) => void;
  setSlideIndex: (slideIndex: number) => void;
  init: () => void;
  deleteSlide: () => void;
  updateId: (id: string | undefined) => void;
  continueWithFrench: () => void;
  getDetailId: (index: number) => string | undefined;
  setRecipes: (
    recipes:
      | PccServer23CurriculumRecipesCurriculumRecipeDto[]
      | undefined
      | null,
  ) => void;
}

const initialState: ThemeProp = {
  currentStep: 0,
  maxPageCount: 1,
  slideIndex: 0,
  contents: [{ slides: [[{ ...components[0] }]] }],
  currentLang: "en",
  en: {
    jsonData: [],
  },
  fr: {
    jsonData: [],
  },
};

export const useRecipesStore = create<RecipesStoreState>()((set, get) => ({
  ...initialState,
  updateDetail: ({ contents, id, concurrencyStamp, en, fr }) =>
    set(({ en: originEn, fr: originFr }) => ({
      contents,
      id,
      concurrencyStamp,
      en: { ...originEn, ...en },
      fr: { ...originFr, ...fr },
    })),
  setRecipes: (recipes) =>
    set(() => ({
      ...initialState,
      recipes,
      contents: [{ slides: [[{ ...components[0] }]] }],
      en: {
        jsonData: [],
      },
      fr: {
        jsonData: [],
      },
    })),
  updateId: (id) => set(() => ({ id })),
  changeStep: (currentStep) =>
    set(({ contents }) => ({
      currentStep,
      contents:
        contents.length > currentStep
          ? [...contents]
          : [...contents, { slides: [[]] }],
    })),
  setSlideIndex: (slideIndex) => set(() => ({ slideIndex })),
  updatePage: (slide: ThemeComponent[]) =>
    set(({ contents, slideIndex, currentStep }) => ({
      contents: contents.map((page, index) => {
        if (index === currentStep) {
          page.slides[slideIndex] = [...slide];
        }
        return page;
      }) ?? [{ slides: [slide] }],
    })),
  addSlide: () =>
    set(({ contents, currentStep }) => ({
      contents: [
        ...(contents.map((page, index) => {
          if (index === currentStep) {
            page.slides.push([]);
          }

          return { ...page };
        }) ?? [{ slides: [] }]),
      ],
    })),
  setLang: (newLang: Language) =>
    set(({ contents, currentLang, ...state }) => {
      return {
        [currentLang]: {
          ...state[currentLang],
          jsonData: [...contents],
        },
        currentStep: 0,
        slideIndex: 0,
        contents: state[newLang].jsonData.length
          ? [...state[newLang].jsonData]
          : [{ slides: [[{ ...components[0] }]] }],
        currentLang: newLang,
      };
    }),
  deleteSlide: () =>
    set(({ contents, slideIndex, currentStep }) => ({
      contents: [
        ...contents.map((page, index) => {
          if (index === currentStep && currentStep + slideIndex !== 0) {
            const slides = [
              ...page.slides.filter((slide, index) => index !== slideIndex),
            ];

            page.slides = [...slides];
          }
          return { ...page };
        }),
      ],
      slideIndex: slideIndex > 0 ? slideIndex - 1 : slideIndex,
    })),
  continueWithFrench: () =>
    set(({ contents }) => ({
      currentStep: 0,
      en: { jsonData: contents },
      contents: [{ slides: [[{ ...components[0] }]] }],
      currentLang: "fr",
    })),
  updatePageState: (sIndex, componentIndex, componentState) =>
    set(({ contents, currentStep, currentLang, ...state }) => ({
      contents: contents.map((page, index) => {
        if (!sIndex && !index) {
          state[currentLang].title = state[currentLang].title = (
            componentState as Record<string, CCFormat>
          ).heading.text;
          state[currentLang].description = (
            componentState as Record<string, CCFormat>
          ).desc.text;
          state[currentLang].topic = (
            componentState as Record<string, CCFormat>
          ).tag.text;
        }
        if (index === currentStep) {
          page.slides[sIndex][componentIndex].componentState = componentState;
        }
        return page;
      }),
    })),
  getDetailId: (index: number) => get().recipes?.[index - 1].id,
  init: () => set(() => ({ ...initialState })),
}));
