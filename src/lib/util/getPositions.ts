export const getPositions = (
  width: number,
  height: number,
  currentX: number,
  currentY: number,
): number[] => {
  const positions: number[] = [];

  Array.from<number>({ length: height })
    .fill(currentY)
    .forEach((y, yIndex) => {
      Array.from<number>({ length: width })
        .fill(currentX)
        .forEach((x, xIndex) => {
          positions.push((y + yIndex) * 3 + (x + xIndex > 2 ? 6 : xIndex + x));
        });
    });
  return positions;
};
