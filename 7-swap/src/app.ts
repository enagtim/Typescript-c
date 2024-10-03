const obj: Record<string, number> = {
    a: 1, 
    b: 2
}
function swapKeysAndValues<T extends Record<string, number>>(object: T): Map<number, string>{
    const swapped = new Map<number, string>();
    for (const [key, value] of Object.entries(object)) {
    swapped.set(value, key);
  };
  return swapped;
}
const res = swapKeysAndValues(obj);
console.log(res);