export type Unit = 'each' | 'liter' | 'grams';

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
