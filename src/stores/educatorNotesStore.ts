import { create } from "zustand";

import { components } from "../components/ContentBuilder/Components/Cards";
import { CCFormat } from "../components/ContentCreation/types";
import { ThemeComponent } from "../pages/types";
import { ContentBuilderProps, Language } from "./../pages/types";
import { ContentBuilderStoreState } from "./contentBuilderStore";

export interface IContent {
  tags?: string;
  curriculum?: string;
}

export type EducatorNote = {
  slides: ThemeComponent[][];
  id?: string;
  concurrencyStamp?: string;
  themeId?: string;
  curriculumId: string;
  en?: {
    title?: string;
    description?: string;
    jsonData?: ThemeComponent[][];
  };
  fr?: {
    title?: string;
    topic?: string;
    description?: string;
    jsonData?: ThemeComponent[][];
  };
};

export interface EducatorNotesForStore extends ContentBuilderProps {
  educatorNotes: EducatorNote[];
}

export interface EducatorNotesStoreProps {
  setEducatorNotes: (educatorNotes: EducatorNote[]) => void;
  changeCurriculum: (curriculumId: string, prev?: string) => void;
}

export interface EducatorNotesStoreState
  extends ContentBuilderStoreState,
    EducatorNotesStoreProps,
    EducatorNotesForStore {}

const initialState: EducatorNotesForStore = {
  id: undefined,
  slideIndex: 0,
  slides: [[{ ...components[0] }]],
  educatorNotes: [],
  currentLang: Language.EN,
  en: {
    jsonData: [],
  },
  fr: {
    jsonData: [],
  },
};

const createStore = () =>
  create<EducatorNotesStoreState>((set, get) => ({
    ...JSON.parse(JSON.stringify(initialState)),
    updateEducatorNotes: (educatorNotes: EducatorNote[]) =>
      set(() => ({
        educatorNotes,
      })),
    changeCurriculum: async (curriculumId: string, prev?: string) =>
      set(({ educatorNotes, slides, en, fr }) => {
        const educatorNote = educatorNotes?.find(
          (item) => item.curriculumId === curriculumId,
        );
        const prevEducatorNotes = [
          ...educatorNotes.map((item) =>
            item.curriculumId === prev
              ? {
                  ...item,
                  slides: [...slides],
                  en: { ...en },
                  fr: { ...fr },
                }
              : item,
          ),
        ];
        return {
          educatorNotes: educatorNote
            ? [...prevEducatorNotes]
            : [
                ...prevEducatorNotes,
                {
                  slides: [[{ ...components[0] }]],
                  curriculumId,
                  en: {
                    jsonData: [],
                  },
                  fr: {
                    jsonData: [],
                  },
                },
              ],
          slides: educatorNote
            ? JSON.parse(JSON.stringify(educatorNote.slides))
            : [[{ ...components[0] }]],
          slideIndex: 0,
          en: educatorNote
            ? JSON.parse(JSON.stringify(educatorNote.en))
            : {
                jsonData: [],
              },
          fr: educatorNote
            ? JSON.parse(JSON.stringify(educatorNote.fr))
            : {
                jsonData: [],
              },
        };
      }),
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
        image: (componentState as Record<string, CCFormat>).media.src,
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
        [currentLang]: {
          ...state[currentLang],
          jsonData: [
            ...slides.map((slide, slideIndex) => {
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
          ],
        },
      })),
    getDetailId: (index: number) => get().items?.[index - 1].id,
    init: () => set(() => ({ ...initialState })),
  }));

export const useEducatorNotesStore = createStore();
