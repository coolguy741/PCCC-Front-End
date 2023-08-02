export const ITEM_RATIO = 1;
export const NUM_COLS = 4;

export interface GetGridDimensionsReturnTypes {
  width: number;
  height: number;
}

interface GridDimensionsTypes {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
}

export const getItemDimensions = (
  gridDimensions: GridDimensionsTypes,
): GetGridDimensionsReturnTypes => {
  const width = gridDimensions.width / NUM_COLS;
  const height = width * ITEM_RATIO;
  return { width, height };
};
