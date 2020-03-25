const makeSpace = (n: number) => `${n * 8}px`;

export function spacer(bothOrY: number, x?: number) {
  return x ? `${makeSpace(bothOrY)} ${makeSpace(x)}` : makeSpace(bothOrY);
}
