export function roundToOneDecimal(bytes: number) {
  return Math.round((bytes / 1024 / 1024) * 10) / 10;
}
