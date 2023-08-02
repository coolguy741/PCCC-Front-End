import { create } from "zustand";

import { ContentBuilderProps, Language, ThemeComponent } from "../pages/types";
import { ContentBuilderStoreState } from "./contentBuilderStore";

export interface IContent {
  tags?: string;
  curriculum?: string;
}

export type Answer = {
  en?: {
    description?: string;
    valid?: boolean;
  };
  fr?: {
    title?: string;
    valid?: boolean;
  };
};

export type Question = {
  en?: {
    description?: string;
  };
  fr?: {
    description?: string;
  };
  answers: Answer[];
};

export type Assessment = {
  slides: ThemeComponent[][];
  id?: string;
  concurrencyStamp?: string;
  themeId?: string;
  curriculumId: string;
  questions?: Question[];
  en?: {
    jsonData?: ThemeComponent[][];
  };
  fr?: {
    jsonData?: ThemeComponent[][];
  };
};

export interface AssessmentsForStore extends ContentBuilderProps {
  assessments: Assessment[];
  questions: Question[];
}

export interface AssessmentsStoreProps {
  setAssessments: (assessments: Assessment[]) => void;
  changeCurriculum: (curriculumId: string, prev?: string) => void;
}

export interface AssessmentsStoreState
  extends ContentBuilderStoreState,
    AssessmentsStoreProps,
    AssessmentsForStore {}

const initialState: AssessmentsForStore = {
  id: undefined,
  slideIndex: 0,
  slides: [[]],
  assessments: [],
  questions: [],
  currentLang: Language.EN,
  en: {
    jsonData: [],
  },
  fr: {
    jsonData: [],
  },
};

const createStore = () =>
  create<AssessmentsStoreState>((set, get) => ({
    ...JSON.parse(JSON.stringify(initialState)),
    updateAssessments: (assessments: Assessment[]) =>
      set(() => ({
        assessments,
      })),
    changeCurriculum: async (curriculumId: string, prev?: string) =>
      set(({ assessments, slides, en, fr }) => {
        const assessment = assessments?.find(
          (item) => item.curriculumId === curriculumId,
        );
        const prevAssessments = [
          ...assessments.map((item) =>
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
          assessments: assessment
            ? [...prevAssessments]
            : [
                ...prevAssessments,
                {
                  slides: [[]],
                  curriculumId,
                  en: {
                    jsonData: [],
                  },
                  fr: {
                    jsonData: [],
                  },
                },
              ],
          slides: assessment
            ? JSON.parse(JSON.stringify(assessment.slides))
            : [[]],
          slideIndex: 0,
          en: assessment
            ? JSON.parse(JSON.stringify(assessment.en))
            : {
                jsonData: [],
              },
          fr: assessment
            ? JSON.parse(JSON.stringify(assessment.fr))
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
        slides: [[]],
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
          : [[]],
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
        slides: [[]],
        currentLang: Language.FR,
      })),
    updatePageState: (sIndex, componentIndex, componentState) =>
      set(({ slides, currentLang, questions, ...state }) => {
        return {
          ...state,
          questions:
            sIndex < questions.length
              ? questions.map((question, index) => {
                  console.log(componentState);
                  return index === sIndex ? { ...question } : question;
                })
              : [...questions],
          slides: slides.map((slide, slideIndex) =>
            slide.map((component, index) => ({
              ...component,
              ...(index === componentIndex && sIndex === slideIndex
                ? { componentState }
                : {}),
            })),
          ),
          [currentLang]: {
            jsonData: slides.map((slide, slideIndex) =>
              slide.map((component, index) => ({
                ...component,
                ...(index === componentIndex && sIndex === slideIndex
                  ? { componentState }
                  : {}),
              })),
            ),
          },
        };
      }),
    getDetailId: (index: number) => get().items?.[index - 1].id,
    init: () => set(() => ({ ...initialState })),
  }));

export const useAssessmentsStore = createStore();
