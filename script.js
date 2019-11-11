for (var i = 1; i <= 20; i += 2) {
  console.log(i);
}

var jhon = ["Jhon", "Smith", 1990, "designer", false, "blue"];
for (var i = 0; i < jhon.length; i++) {
  if (typeof jhon[i] !== "string") break;
  console.log(jhon[i]);
}

var i = 0;
while (i < jhon.length) {
  console.log(jhon[i]);
  i++;
}

for (var i = jhon.length - 1; i >= 0; i--) {
  console.log(jhon[i]);
}
