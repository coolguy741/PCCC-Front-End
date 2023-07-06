import {
  State,
  ThemeComponentProps,
} from "../components/ContentCreation/types";

export type Unit = "each" | "liter" | "grams";
export type Color = "orange" | "red" | "blue" | "green" | "yellow" | "neutral";
export type Language = "en" | "fr";
export enum ContentBuilderType {
  THEMES = "themes",
  ACTIVITIES = "activities",
  RECIPES = "recipes",
  MEALTIME_MOMENTS = "mealtime-moments",
  FOODWAYS = "foodways",
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
