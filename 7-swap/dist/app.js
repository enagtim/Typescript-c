"use strict";
const obj = {
    a: 1,
    b: 2
};
function swapKeysAndValues(object) {
    const swapped = new Map();
    for (const [key, value] of Object.entries(object)) {
        swapped.set(value, key);
    }
    ;
    return swapped;
}
const res = swapKeysAndValues(obj);
console.log(res);
