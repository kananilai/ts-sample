export function getFirstLatter(str?: string) {
  //non-null-assertion、無理やり通す
  // return str!.charAt(0);
  if (!str) {
    return;
  }
  return str.charAt(0);
}

