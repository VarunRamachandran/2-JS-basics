// //Function Decleration

// //Function expresion
// var names = ["Jhon", "Jane", "Mark"];
// var years = new Array(1990, 1969, 1948);
// console.log(names);
// console.log(names.length);

// names[1] = "Ben";
// names[5] = "Mary";
// names[names.length] = "Amy";
// console.log(names);

// var jhon = ["Jhon", "Smith", 1990, "designer", false];

// jhon.push("blue");
// jhon.unshift("Mr.");
// jhon.pop();
// jhon.pop();
// jhon.shift();
// var isDesigner = jhon.indexOf("designer") === -1 ? "Jhon is NOT a designer" : "Jhon IS a designer";
// console.log(isDesigner);

var jhonTip = [];
var JhonTotal = [];

function tipCalculator(amount) {
  if (amount < 50) {
    return 0.2;
  } else if (amount >= 50 && amount < 200) {
    return 0.15;
  } else if (amount > 200) {
    return 0.1;
  }
}

function totalCalculator(amount) {
  return tipCalculator(amount) * amount + amount;
}

jhonTip.push(tipCalculator(124), tipCalculator(48), tipCalculator(268));
console.log(jhonTip);
JhonTotal.push(totalCalculator(124), totalCalculator(48), totalCalculator(268));
console.log(JhonTotal);
