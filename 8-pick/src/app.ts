interface Object{
    name: string; 
    age: number; 
    skills: string[]
};
const user: Object = {
    name: 'Alex', 
    age: 8, 
    skills: ['typescript', 'javascript']
};
function pickObjectKeys<T extends Object, K extends keyof T>(object: T, keys: K[]): Partial<T>{
    const result: Partial<T> = {};
    for(const key of keys){
        if(key in object){
            result[key] = object[key]
        }
    }
    return result;
};
const res = pickObjectKeys(user, ['age', 'skills']);
console.log(res);