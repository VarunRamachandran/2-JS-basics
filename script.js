var firstName = "jhon";
var civilStatus = "single";

if (civilStatus === "married") {
  console.log(firstName + " " + "is married");
} else {
  console.log(firstName + " will hopefully marry soon:}");
}

var isMarried = true;
if (isMarried === true) {
  console.log(firstName + " " + "is married");
} else {
  console.log(firstName + " will hopefully marry soon:}");
}

let markMass = 40;
let markHeight = 1.7;
let jhonMass = 30;
let johnHeight = 1.8;

let markBmi = markMass / (markHeight * 2);
let jhonBmi = jhonMass / (johnHeight * 2);
console.log(markBmi, jhonBmi);

var greaterBmi = markBmi > jhonBmi;
console.log("Is Mark's age greater than jhon " + " " + greaterBmi);

if (markBmi > jhonBmi) {
  console.log("Mark's Bmi is greater");
} else {
  console.log("Jhon's Bmi is greater");
}
