import { create } from "zustand";
import { Language } from "./../pages/types";

import { components } from "../components/ContentBuilder/Components/Cards";
import { State as ComponentState } from "../components/ContentCreation/types";
import { PccServer23ActivitiesActivityDto } from "../lib/api/api";
import { ThemeComponent } from "../pages/types";

interface IContent {
  tags?: string;
  curriculum?: string;
  slides: ThemeComponent[][];
}

interface ThemeProp {
  id?: string;
  activities?: PccServer23ActivitiesActivityDto[] | null;
  maxPageCount: number;
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
export interface ActivitiesStoreState extends ThemeProp {
  updateDetail: (detail: {
    contents: IContent[];
    id: string;
    concurrencyStamp: string;
    en?: {
      title?: string;
      topic?: string;
      description?: string;
    };
    fr?: {
      title?: string;
      topic?: string;
      description?: string;
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
  continueWithFrench: () => void;
  updateId: (id: string | undefined) => void;
  setActivities: (
    activities: PccServer23ActivitiesActivityDto[] | undefined | null,
  ) => void;
  getDetailId: (index: number) => string | undefined;
}

const initialState: ThemeProp = {
  id: undefined,
  maxPageCount: 1,
  currentStep: 0,
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

export const useActivitiesStore = create<ActivitiesStoreState>()(
  (set, get) => ({
    ...initialState,
    updateDetail: ({ contents, id, concurrencyStamp, en, fr }) =>
      set(({ en: originEn, fr: originFr }) => ({
        contents,
        id,
        concurrencyStamp,
        en: { ...originEn, ...en },
        fr: { ...originFr, ...fr },
      })),
    updateId: (id) => set(() => ({ id })),
    setActivities: (activities) =>
      set(() => {
        return {
          ...initialState,
          activities,
          contents: [{ slides: [[{ ...components[0] }]] }],
          en: {
            jsonData: [],
          },
          fr: {
            jsonData: [],
          },
        };
      }),
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
          contents: state[currentLang].jsonData.length
            ? [...state[currentLang].jsonData]
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
            state[currentLang].title = state[currentLang].title =
              componentState.heading.text;
            state[currentLang].description = componentState.desc.text;
            state[currentLang].topic = componentState.tag.text;
          }
          if (index === currentStep) {
            page.slides[sIndex][componentIndex].componentState = componentState;
          }
          return page;
        }),
      })),
    getDetailId: (index: number) => get().activities?.[index - 1].id,
    init: () => set(() => ({ ...initialState })),
  }),
);
