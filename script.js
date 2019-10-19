// var now = 2018;
// var yearJhon = 1989;
// var fullAge = 18;

// //Multiple Operators
// var fullAge = now - yearJhon >= fullAge;
// console.log(fullAge);

// //Grouping
// var ageJhon = now - yearJhon;
// var ageMark = 35;
// var avg = (ageJhon + ageMark) / 2;
// console.log("avg" + avg);

// // Multiple Assignemnt
// var x, y;
// x = y = (3 + 5) * 4 - 6;
// console.log(x);
// //x = x * 2   is the same as x *= 2;

let markMass = 40;
let markHeight = 1.7;
let jhonMass = 30;
let johnHeight = 1.8;

let markBmi = markMass / (markHeight * 2);
let jhonBmi = jhonMass / (johnHeight * 2);
console.log(markBmi, jhonBmi);

var greaterBmi = markBmi > jhonBmi;
console.log("Is Mark's age greater than jhon " + " " + greaterBmi);
