export function lengthDots(str) {
  if (str.length > 30) {
    return str.slice(0, 30) + '...'
  }
  return str
}
