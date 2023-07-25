import { create } from "zustand";

import { components } from "../components/ContentBuilder/Components/Cards";
import { CCFormat } from "../components/ContentCreation/types";
import { ThemeComponent } from "../pages/types";
import {
  ContentBuilderProps,
  ContentStoreProps,
  Language,
} from "./../pages/types";

export interface IContent {
  tags?: string;
  curriculum?: string;
}

export interface ContentBuilderStoreState
  extends ContentStoreProps,
    ContentBuilderProps {}

const initialState: ContentBuilderProps = {
  id: undefined,
  slideIndex: 0,
  slides: [[{ ...components[0] }]],
  currentLang: Language.EN,
  en: {
    jsonData: [],
  },
  fr: {
    jsonData: [],
  },
};

const createStore = () =>
  create<ContentBuilderStoreState>((set, get) => ({
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
        currentLang: Language.FR,
      })),
    updatePageState: (sIndex, componentIndex, componentState) =>
      set(({ slides, currentLang, ...state }) => ({
        slides: slides.map((slide, slideIndex) => {
          if (!sIndex && sIndex === componentIndex) {
            state[currentLang].title = (
              componentState as Record<string, CCFormat>
            ).heading.text;
            state[currentLang].description = (
              componentState as Record<string, CCFormat>
            ).desc.text;
            state[currentLang].topic = (
              componentState as Record<string, CCFormat>
            ).tag.text;
            state.image = (
              componentState as Record<string, CCFormat>
            ).media.src;
            state[Language.EN].image = (
              componentState as Record<string, CCFormat>
            ).media.src;
            state[Language.FR].image = (
              componentState as Record<string, CCFormat>
            ).media.src;
          }

          return slide.map((component, index) => ({
            ...component,
            ...(index === componentIndex && sIndex === slideIndex
              ? { componentState }
              : {}),
          }));
        }),
      })),
    getDetailId: (index: number) => get().items?.[index - 1].id,
    init: () => set(() => ({ ...initialState })),
  }));

export const useActivitiesStore = createStore();
export const useRecipesStore = createStore();
export const useThemeStore = createStore();
export const useEducatorNotesStore = createStore();
