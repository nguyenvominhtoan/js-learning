// //object array

// let people: {
//   name: string;
//   age: number;
// }[] = [];

// //func

// const sum = (num1: number, num2: number): number => num1 + num2;

// const handleClick = <Type>(value: Type) => value;
// let num = 10;
// handleClick<number>(num);

const Edentiy = <Type>(value: Type) => value;

const result = Edentiy(23);
console.log(result);
