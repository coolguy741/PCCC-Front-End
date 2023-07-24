import { create } from "zustand";

import { CCFormat, State } from "../components/ContentCreation/types";
import {
  PccServer23MealtimeMomentsMealtimeMomentDto,
  PccServer23SharedIMultiLingualDto1PccServer23MealtimeMomentsPublicMealtimeMomentDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
} from "../lib/api/api";
import { Language } from "../pages/types";

interface ThemeProp {
  id?: string;
  currentLang: Language;
  image?: string;
  tags?: string;
  concurrencyStamp?: string;
  items: PccServer23MealtimeMomentsMealtimeMomentDto[];
  en: {
    title?: string;
    topic?: string;
    image?: string;
    description?: string;
    componentState?: State;
  };
  fr: {
    title?: string;
    topic?: string;
    image?: string;
    description?: string;
    componentState?: State;
  };
}

export interface MealtimeMomentsStore extends ThemeProp {
  init: () => void;
  setLang: (lang: Language) => void;
  setItems: (items: PccServer23MealtimeMomentsMealtimeMomentDto[]) => void;
  setDetail: (
    data: PccServer23SharedIMultiLingualDto1PccServer23MealtimeMomentsPublicMealtimeMomentDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
  ) => void;
  setTitle: (title: string) => void;
  setTopic: (topic: string) => void;
  setDescription: (description: string) => void;
  updatePageState: (slideIndex: number, index: number, state: State) => void;
}

const initialState: ThemeProp = {
  id: undefined,
  items: [],
  currentLang: Language.EN,
  en: {},
  fr: {},
};

export const useMealtimeMomentsStore = create<MealtimeMomentsStore>()(
  (set) => ({
    ...initialState,
    setItems: (items) => set(() => ({ items, en: {}, fr: {} })),
    setDetail: ({
      english,
      french,
    }: PccServer23SharedIMultiLingualDto1PccServer23MealtimeMomentsPublicMealtimeMomentDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull) =>
      set(() => ({
        id: english?.id || french?.id,
        en: {
          ...english,
          title: english?.title || "Click to Edit",
          description: english?.description || "Click to Edit",
          topic: english?.topic || "Click to Edit",
          image: english?.image || "/images/icons/info.svg",
          componentState: {
            desc: {
              mode: "view",
              text: english?.description || "Click to edit",
            },
            heading: { mode: "view", text: english?.title || "Click to edit" },
            tag: { mode: "view", text: "Overview" },
          } as State,
        },
        fr: {
          ...french,
          title: french?.title || "Click to Edit",
          description: french?.description || "Click to Edit",
          topic: french?.topic || "Click to Edit",
          image: french?.image || "/images/icons/info.svg",
          componentState: {
            desc: {
              mode: "view",
              text: french?.description || "Click to edit",
            },
            heading: { mode: "view", text: french?.title || "Click to edit" },
            tag: { mode: "view", text: "Overview" },
          } as State,
        },
      })),
    setLang: (currentLang: Language) =>
      set(() => ({
        currentLang,
      })),
    init: () => set(() => ({ ...initialState })),
    setTitle: (title: string) =>
      set(({ currentLang, ...state }) => ({
        [currentLang]: { ...state[currentLang], title },
      })),
    setTopic: (topic: string) =>
      set(({ currentLang, ...state }) => ({
        [currentLang]: { ...state[currentLang], topic },
      })),
    setDescription: (description: string) =>
      set(({ currentLang, ...state }) => ({
        [currentLang]: { ...state[currentLang], description },
      })),
    updatePageState: (sIndex, componentIndex, componentState) =>
      set(({ currentLang, ...state }) => {
        if (!sIndex) {
          state[currentLang].title = (
            componentState as Record<string, CCFormat>
          ).heading.text;
          state[currentLang].description = (
            componentState as Record<string, CCFormat>
          ).desc.text;
          state[currentLang].componentState = componentState;
        }
        return { ...state };
      }),
  }),
);
