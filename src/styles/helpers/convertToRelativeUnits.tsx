export function convertToRelativeUnit(pixels: number, unitType: "vh" | "vw") {
  if (unitType === "vh") return `${(100 * pixels) / window.innerHeight}vh`;
  else return `${(100 * pixels) / window.innerWidth}vw`;
}
