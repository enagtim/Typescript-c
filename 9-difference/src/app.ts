interface IA {
    a: number;
    b: string;
}
interface IB {
    a: number;
    c: boolean;
}
let a: IA = { a: 5, b: '' };
let b: IB = { a: 10, c: true };
interface IDifference {
    b: string;
}
function difference<T extends object, U extends object>(obj1: T, obj2: U): Pick<T, Exclude<keyof T, keyof U>> {
    const result: Partial<T> = {};
    for (const key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            if (!(key in obj2)) {
                result[key] = obj1[key]
            }
        }
    }
    return result as Pick<T, Exclude<keyof T, keyof U>>; 
}
let v0: IDifference = difference(a, b);
console.log(v0); 