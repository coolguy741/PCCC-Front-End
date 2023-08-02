import {
  State,
  ThemeComponentProps,
} from "../components/ContentCreation/types";
import {
  PccServer23ActivitiesActivityDto,
  PccServer23CurriculumRecipesCurriculumRecipeDto,
  PccServer23ThemesThemeDto,
} from "../lib/api/api";

export type Unit = "each" | "liter" | "grams";
export type Color = "orange" | "red" | "blue" | "green" | "yellow" | "neutral";
export enum Language {
  EN = "en",
  FR = "fr",
}
export enum ContentBuilderType {
  THEMES = "themes",
  ACTIVITIES = "activities",
  RECIPES = "recipes",
  MEALTIME_MOMENTS = "mealtime-moments",
  FOODWAYS = "foodways",
}

export enum ThemeProperties {
  EDUCATOR_NOTES = "educator-notes",
  ASSESSMENT = "assessment",
  ACTIVITIES = "activities",
  RECIPES = "recipes",
}

export interface Material {
  unit: Unit;
  amount: number;
  name: string;
}

export interface Grocery {
  name: string;
  id: number;
  icon?: string;
  materials: Material[];
}

export interface MenuItem {
  label: string;
  to: string;
  icon: string;
  auth?: boolean;
}

export interface Menu {
  label: string;
  to: string;
  icon: string;
  auth?: boolean;
  subMenus?: MenuItem[];
}

export interface Filter {
  id: number;
  label: string;
  value: string;
}

export interface ThemeComponent {
  width: number;
  height: number;
  x?: number;
  y?: number;
  id: number;
  title: string;
  component: (state: ThemeComponentProps) => JSX.Element;
  preview: JSX.Element;
  componentState?: State;
}

export interface IContent {
  tags?: string;
  curriculum?: string;
  slides: ThemeComponent[][];
}

export interface MockContentsDto {
  id: number;
  image?: string;
  alt?: string;
  topic?: string;
  title?: string;
  description?: string;
}

export interface FoodwayStop {
  location: string[] | undefined[];
  description: string[] | undefined[];
  timePeriod: string[] | undefined[];
}

export interface ContentBuilderProps {
  id?: string;
  currentLang: Language;
  slideIndex: number;
  image?: string;
  items?:
    | PccServer23ActivitiesActivityDto[]
    | PccServer23CurriculumRecipesCurriculumRecipeDto[]
    | PccServer23ThemesThemeDto[]
    | null;
  concurrencyStamp?: string;
  slides: ThemeComponent[][];
  tags?: string[];
  en: {
    title?: string;
    topic?: string;
    image?: string;
    description?: string;
    jsonData: ThemeComponent[][];
  };
  fr: {
    title?: string;
    topic?: string;
    image?: string;
    description?: string;
    jsonData: ThemeComponent[][];
  };
}

export interface ContentStoreProps {
  updateDetail: (detail: {
    slides: ThemeComponent[][];
    id: string;
    concurrencyStamp: string;
    en?: {
      title?: string;
      topic?: string;
      description?: string;
      jsonData?: ThemeComponent[][];
    };
    fr?: {
      title?: string;
      topic?: string;
      description?: string;
      jsonData?: ThemeComponent[][];
    };
  }) => void;
  addSlide: () => void;
  updatePage: (slide: ThemeComponent[]) => void;
  updatePageState: (slideIndex: number, index: number, state: State) => void;
  setLang: (lang: Language) => void;
  setSlideIndex: (slideIndex: number) => void;
  init: () => void;
  deleteSlide: () => void;
  continueWithFrench: () => void;
  updateId: (id: string | undefined) => void;
  setItems: (
    items:
      | PccServer23ActivitiesActivityDto[]
      | PccServer23CurriculumRecipesCurriculumRecipeDto[]
      | PccServer23ThemesThemeDto[]
      | undefined
      | null,
  ) => void;
  getDetailId: (index: number) => string | undefined;
}
