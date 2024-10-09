class User{
    @AllowFunc()
    age: number = 30;
}
function AllowFunc (){
    return (
        target: Object, 
        propertykey: string | symbol,
    ) =>{
        let value = target[propertykey];
        const getter = function (){
            return value;
        };
        const setter = function(newValue: number): void{
            if(newValue > 0){
                value = newValue;
            }else{
                throw new Error('Невозможно присвоить значение, оно должно быть больше 0');
            };
        };
        Object.defineProperty(target, propertykey, {
            set: setter, 
            get: getter
        });
    }
}
const person = new User();
console.log(person.age);
person.age = 25;
console.log(person.age);
person.age = 0;
console.log(person.age);
person.age = -3;
console.log(person.age);


