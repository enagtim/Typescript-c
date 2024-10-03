"use strict";
;
const user = {
    name: 'Alex',
    age: 8,
    skills: ['typescript', 'javascript']
};
function pickObjectKeys(object, keys) {
    const result = {};
    for (const key of keys) {
        if (key in object) {
            result[key] = object[key];
        }
    }
    return result;
}
;
const res = pickObjectKeys(user, ['age', 'skills']);
console.log(res);
