"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class User {
    constructor() {
        this.age = 30;
    }
}
__decorate([
    AllowFunc()
], User.prototype, "age", void 0);
function AllowFunc() {
    return (target, propertykey) => {
        let value = target[propertykey];
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            if (newValue > 0) {
                value = newValue;
            }
            else {
                throw new Error('Невозможно присвоить значение, оно должно быть больше 0');
            }
            ;
        };
        Object.defineProperty(target, propertykey, {
            set: setter,
            get: getter
        });
    };
}
const person = new User();
console.log(person.age);
person.age = 25;
console.log(person.age);
person.age = 0;
console.log(person.age);
person.age = -3;
console.log(person.age);
