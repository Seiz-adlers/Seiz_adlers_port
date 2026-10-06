export function isPlaceholder(value: string | undefined | null): boolean {
  if (!value) return true;
  return /^\[INSERT.*\]$/i.test(value.trim());
}
