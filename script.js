let teamJhonAvg = (89 + 120 + 103) / 3;
let teamMikeAvg = (116 + 94 + 123) / 3;

console.log(teamJhonAvg);
console.log(teamMikeAvg);

if (teamJhonAvg > teamMikeAvg) {
  console.log(" Team Jhon is the winner with score of  " + teamJhonAvg);
} else if (teamMikeAvg > teamJhonAvg) {
  console.log(" Team Mike is the winner with score of  " + teamMikeAvg);
} else {
  console.log("Both teams are tied");
}

let teamMaryAvg = (97 + 134 + 105) / 3;
console.log(teamMaryAvg);

if (teamJhonAvg > teamMikeAvg && teamJhonAvg > teamMaryAvg) {
  console.log(" Team Jhon is the winner with score of  " + teamJhonAvg);
} else if (teamMikeAvg > teamJhonAvg && teamMikeAvg > teamMaryAvg) {
  console.log(" Team Mike is the winner with score of  " + teamMikeAvg);
} else if (teamMaryAvg > teamJhonAvg && teamMaryAvg > teamMikeAvg) {
  console.log(" Team Mary is the winner with score of  " + teamMaryAvg);
} else {
  console.log("Its a draw");
}
