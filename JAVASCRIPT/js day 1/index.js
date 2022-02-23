// Variables
//1 Declaration
//2 Initialization
let x = 5; // Number
const pie = 3.142; // Float
let isPassed; // Boolean
let names = ["Basit", "Abdullah"]; // Arrays
let marks = [4, 9];

// if (3 > x) {
//   console.log("3 is greater");
// } else if (3 === x) {
//   console.log("3 and", x, "are equal");
// } else {
//   console.log("3 is lesser");
// }

if (marks[1] > 5) {
  isPassed = true;
} else {
  isPassed = false;
}

if (isPassed) {
  console.log(
    `${names[1]} has achieved ${marks[1]} marks out of 10 and he has passed `
  );
} else {
  console.log(
    `${names[1]} has achieved ${marks[1]} marks out of 10 and he has not passed `
  );
}
