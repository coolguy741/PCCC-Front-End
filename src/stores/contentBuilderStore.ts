import { create } from "zustand";
import { CCFormat } from "./../components/ContentCreation/types";
import {
  ContentBuilderProps,
  ContentStoreProps,
  Language,
} from "./../pages/types";

import { components } from "../components/ContentBuilder/Components/Cards";
import { ThemeComponent } from "../pages/types";

export interface IContent {
  tags?: string;
  curriculum?: string;
}

export interface contentBuilderStoreState
  extends ContentStoreProps,
    ContentBuilderProps {}

const initialState: ContentBuilderProps = {
  id: undefined,
  slideIndex: 0,
  slides: [[{ ...components[0] }]],
  currentLang: "en",
  en: {
    jsonData: [],
  },
  fr: {
    jsonData: [],
  },
};

const createStore = () =>
  create<contentBuilderStoreState>((set, get) => ({
    ...JSON.parse(JSON.stringify(initialState)),
    updateDetail: ({ slides, id, concurrencyStamp, en, fr }) =>
      set(({ en: originEn, fr: originFr }) => ({
        slides,
        id,
        concurrencyStamp,
        en: { ...originEn, ...en },
        fr: { ...originFr, ...fr },
      })),
    updateId: (id) => set(() => ({ id })),
    setItems: (items) =>
      set(() => ({
        ...initialState,
        items,
        slides: [[{ ...components[0] }]],
        en: {
          jsonData: [],
        },
        fr: {
          jsonData: [],
        },
      })),
    setSlideIndex: (slideIndex) => set(() => ({ slideIndex })),
    updatePage: (slide: ThemeComponent[]) =>
      set(({ slides, slideIndex }) => ({
        slides: slides.map((currentSlide, index) =>
          index === slideIndex ? slide : currentSlide,
        ),
      })),
    addSlide: () =>
      set(({ slides }) => ({
        slides: [...slides, []],
      })),
    setLang: (newLang: Language) =>
      set(({ slides, currentLang, ...state }) => ({
        [currentLang]: {
          ...state[currentLang],
          jsonData: [...slides],
        },
        currentStep: 0,
        slideIndex: 0,
        slides: state[newLang].jsonData.length
          ? [...state[newLang].jsonData]
          : [[{ ...components[0] }]],
        currentLang: newLang,
      })),
    deleteSlide: () =>
      set(({ slides, slideIndex }) => ({
        slides: [
          ...slides.filter(
            (slide, index) => !(index === slideIndex && index !== 0),
          ),
        ],
        slideIndex: slideIndex > 0 ? slideIndex - 1 : slideIndex,
      })),
    continueWithFrench: () =>
      set(({ slides }) => ({
        currentStep: 0,
        en: { jsonData: slides },
        slides: [[{ ...components[0] }]],
        currentLang: "fr",
      })),
    updatePageState: (sIndex, componentIndex, componentState) =>
      set(({ slides, currentLang, ...state }) => ({
        slides: slides.map((slide) => {
          if (!sIndex) {
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
          slide[componentIndex].componentState = componentState;
          return slide;
        }),
      })),
    getDetailId: (index: number) => get().items?.[index - 1].id,
    init: () => set(() => ({ ...initialState })),
  }));

export const useActivitiesStore = createStore();
export const useRecipesStore = createStore();
export const useThemeStore = createStore();
export const useEducatorNotesStore = createStore();
