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
  materials: Material[];
}
