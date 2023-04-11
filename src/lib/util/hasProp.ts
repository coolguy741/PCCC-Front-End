export function hasProp<K extends PropertyKey>(
  obj: unknown,
  key: K | null | undefined,
): obj is Record<K, unknown> {
  return key != null && obj != null && typeof obj === 'object' && key in obj;
}
