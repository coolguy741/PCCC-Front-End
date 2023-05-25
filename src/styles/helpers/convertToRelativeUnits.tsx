export function convertToRelativeUnit(pixels: number, unitType: "vh" | "vw") {
  if (unitType === "vh") return `${(100 * pixels) / 1200}vh`;
  else return `${(100 * pixels) / 1920}vw`;
}
