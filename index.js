// console.log("hello");

// const newArrayNum = arrayNum.sort((a, b) => (a > b ? 1 : -1));
// console.log(newArrayNum);
// const findNum = arrayNum.map((num) => num * 2);
// console.log(findNum);
// const findIndex = arrayNum.findIndex((e) => e > 2);
// console.log(findIndex);

// const array1 = [1, 2, 3];
// const array2 = [2, 4, 5];

// const array3 = [4, 5, 6];

// console.log("---------");
// const newArr = array1.concat(array2, array3);
// console.log(newArr);
// console.log("---------");
// const newArr1 = [...array1, ...array2];
// console.log(newArr1);

// const listToys = ["ball", "gun", "boom", "dao", "bua"];

// const [ball, gun, boom, ...rest] = listToys;
// console.log(rest);
// const demo = (a, ...rest) => {
//   return [a, ...rest];
// };
// console.log(demo(1, 2, 3, 4, 5));

console.log("tang --------");
// for (let i = 0; i < arrayNum.length; i++) {
//   console.log(arrayNum[i]);
// }
// console.log("giam --------");
// for (let i = arrayNum.length - 1; i >= 0; i = i - 1) {
//   console.log(arrayNum[i]);
// }
const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const copyArr = [];

for (let i = 0; i < arrayNum.length; i++) {
  copyArr.push(arrayNum[i]);
}
console.log(copyArr.filter((e) => (e >= 2 ? "toan" : "cc")));
