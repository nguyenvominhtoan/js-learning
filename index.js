console.log("hello");

const arrayNum = [1, 8888, 9999, 100000];

const newArrayNum = arrayNum.sort((a, b) => (a > b ? 1 : -1));
console.log(newArrayNum);
