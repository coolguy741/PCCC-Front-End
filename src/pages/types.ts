export type Unit = "each" | "liter" | "grams";
export type Color = "orange" | "red" | "blue" | "green" | "yellow" | "neutral";

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
  col: number;
  row: number;
  id: number;
  title: string;
  component: JSX.Element;
  preview: JSX.Element;
}
