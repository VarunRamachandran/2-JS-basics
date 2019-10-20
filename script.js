var firstName = "Jhon";
var age = 24;
//terneary operator
age >= 18 ? console.log(firstName + "  drink's beer.") : console.log(firstName + " drink's juice.");

var drink = age >= 18 ? "beer" : "juice";

console.log(drink);

// Switch Statement

var job = "teacher";

switch (job) {
  case "teacher":
    console.log(firstName + " Teaches kids how to code");
    break;
  case "driver":
    console.log(firstName + "drives uber in lisbon");
    break;
  case "designer":
    console.log(firstName + " Designs beautiful websites");
    break;
  default:
    console.log(firstName + " does something else");
}

var age = 40;

switch (true) {
  case age < 13:
    console.log(firstName + " is a boy");
    break;
  case age >= 13 && age < 20:
    console.log(firstName + " is a teenager");
    break;
  case age > 20 && age < 30:
    console.log(firstName + " is a young man");
    break;
  default:
    console.log(firstName + " is a  man");
}
