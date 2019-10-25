function claculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJhon = claculateAge(1990);
var ageJane = claculateAge(1940);
var ageMike = claculateAge(1930);
console.log(ageJhon, ageJane, ageMike);

function yearsUntilRetirement(year, firstName) {
  var age = claculateAge(year);
  var retirement = 65 - age;
  if (retirement > 0) {
    console.log(firstName + " retires in" + "  " + retirement + "years");
  } else {
    console.log(firstName + " is already retired");
  }
}

yearsUntilRetirement(1990, "Jhon");
yearsUntilRetirement(1930, "MIke");
yearsUntilRetirement(1950, "Jane");
