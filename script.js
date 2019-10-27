//Function Decleration

//Function expresion
var names = ["Jhon", "Jane", "Mark"];
var years = new Array(1990, 1969, 1948);
console.log(names);
console.log(names.length);

names[1] = "Ben";
names[5] = "Mary";
names[names.length] = "Amy";
console.log(names);

var jhon = ["Jhon", "Smith", 1990, "designer", false];

jhon.push("blue");
jhon.unshift("Mr.");
jhon.pop();
jhon.pop();
jhon.shift();
var isDesigner = jhon.indexOf("designer") === -1 ? "Jhon is NOT a designer" : "Jhon IS a designer";
console.log(isDesigner);
