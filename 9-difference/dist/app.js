"use strict";
let a = { a: 5, b: '' };
let b = { a: 10, c: true };
function difference(obj1, obj2) {
    const result = {};
    for (const key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            if (!(key in obj2)) {
                result[key] = obj1[key];
            }
        }
    }
    return result;
}
let v0 = difference(a, b);
console.log(v0);
