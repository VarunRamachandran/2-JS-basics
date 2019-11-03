var jhon = {
  firstNmae: "Jhon",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "Teacher",
  isMarried: false
};

console.log(jhon.firstNmae);
console.log(jhon["lastName"]);
var x = "birthYear";
console.log(jhon[x]);

jhon.job = "designer";
jhon["isMarried"] = true;

console.log(jhon);

var jane = new Object();
jane.name = "Jane";
jane.birthYear = 1969;
jane["lastName"] = "Smith";
console.log(jane);
