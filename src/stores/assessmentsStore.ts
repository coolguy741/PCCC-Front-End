import { create } from "zustand";
import { CCFormat } from "../components/ContentCreation/types";

import { ContentBuilderProps, Language, ThemeComponent } from "../pages/types";
import { PccServer23AssessmentQuestionsPublicAssessmentQuestionDto } from "./../lib/api/api";
import { ContentBuilderStoreState } from "./contentBuilderStore";

export interface IContent {
  tags?: string;
  curriculum?: string;
}

export type Answer = {
  valid?: boolean;
  en?: {
    description?: string;
  };
  fr?: {
    description?: string;
  };
};

export type Question = {
  id?: string;
  en?: {
    description?: string;
    jsonData?: ThemeComponent[];
  };
  fr?: {
    description?: string;
    jsonData?: ThemeComponent[];
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
  setAssessmentQuestions: (
    assessments: PccServer23AssessmentQuestionsPublicAssessmentQuestionDto[],
    lang: Language,
  ) => void;
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
    setAssessmentQuestions: (assessmentQuestions, lang) =>
      set((state) => {
        const temp = assessmentQuestions?.reduce((group: any, question) => {
          const { curriculumId } = question;
          group[curriculumId as string] = group[curriculumId as string] ?? [];
          group[curriculumId as string].push(question);
          return group;
        }, {});
        const assessments: PccServer23AssessmentQuestionsPublicAssessmentQuestionDto[][] =
          Object.values(temp);

        console.log(assessments);
        return {
          ...state,
          assessments: assessments.map((questions) => {
            return {
              curriculumId: questions?.[0].curriculumId ?? "",
              en: {
                jsonData: questions.map<ThemeComponent[]>((question) =>
                  JSON.parse(question.englishJson || "[]"),
                ),
              },
              fr: {
                jsonData: questions.map<ThemeComponent[]>((question) =>
                  JSON.parse(question.frenchJson || "[]"),
                ),
              },
              slides:
                lang === Language.EN
                  ? questions.map<ThemeComponent[]>((question) =>
                      JSON.parse(question.englishJson || "[]"),
                    )
                  : questions.map<ThemeComponent[]>((question) =>
                      JSON.parse(question.frenchJson || "[]"),
                    ),
              questions: questions.map((question) => {
                return {
                  id: question.id,
                  en: {
                    description: question.englishDescription || "",
                    jsonData: JSON.parse(question.englishJson || "[]"),
                  },
                  fr: {
                    description: question.frenchDescription || "",
                    jsonData: JSON.parse(question.frenchJson || "[]"),
                  },
                  answers:
                    question.answer?.map((answer) => ({
                      valid: answer.valid,
                      en: {
                        description: answer.englishDescription || "",
                      },
                      fr: {
                        description: answer.frenchDescription || "",
                      },
                    })) ?? [],
                };
              }),
            };
          }),
        };
      }),
    updateAssessments: (assessments: Assessment[]) =>
      set(() => ({
        assessments,
      })),
    changeCurriculum: async (curriculumId: string, prev?: string) =>
      set(({ assessments, slides, en, fr, questions }) => {
        const assessment = assessments?.find(
          (item) => item.curriculumId === curriculumId,
        );
        const prevAssessments = [
          ...assessments.map((item) =>
            item.curriculumId === prev
              ? {
                  ...item,
                  slides: [...slides],
                  questions: [...questions],
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
                  questions: [],
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
          questions: [],
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
        let question: any = {};
        if ((componentState as any).variant === "multiple") {
          if (sIndex < questions.length) {
            question = questions[sIndex];
          }
          const answers =
            question.answers ??
            Array.from({ length: 4 }).map((item) => ({
              en: { description: "" },
              fr: { description: "" },
              valid: false,
            }));
          question.answers = answers.map(
            (answer: Partial<Answer>, item: number) =>
              (componentState as Record<string, CCFormat>)[`option${item + 1}`]
                ? {
                    ...answer,
                    [currentLang]: {
                      description: (componentState as Record<string, CCFormat>)[
                        `option${item + 1}`
                      ].text,
                    },
                    valid:
                      (componentState as Record<string, CCFormat>)[
                        `option${item + 1}`
                      ].valid ?? false,
                  }
                : answer,
          );
        } else if ((componentState as any).variant === "optional") {
          if (sIndex < questions.length) {
            question = questions[sIndex];
          }
          question.answers = question.answers ?? [
            {
              [currentLang]: {
                description:
                  (componentState as Record<string, CCFormat>).question.text ??
                  "True",
                valid:
                  (componentState as Record<string, CCFormat>).option.value ??
                  true,
              },
            },
          ];
        }
        const newQuestion = {
          ...question,
          [currentLang]: {
            description: (componentState as Record<string, CCFormat>).question
              .text,
          },
        };
        return {
          ...state,
          questions:
            sIndex < questions.length
              ? questions.map((question, index) => {
                  return index === sIndex ? { ...newQuestion } : question;
                })
              : [...questions, newQuestion],
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
