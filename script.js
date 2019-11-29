let jhon = [124, 48, 268, 180, 42];
let mark = [77, 375, 110, 45];

let jhontip = [];
let jhonfinalAmt = [];

let marktip = [];
let markfinalAmt = [];

let markAvg = 0;
let jhonAvg = 0;

let jhonAvgFinal = [];
let markAvgFinal = [];

function jhonCalltip(amt) {
  if (amt > 50) {
    jhontip.push(amt * 0.2);
    jhonfinalAmt.push(amt * 0.2 + amt);
  } else if (amt > 50 && amt < 200) {
    jhontip.push(amt * 0.15);
    jhonfinalAmt.push(amt * 0.15 + amt);
  } else if (amt > 200) {
    jhontip.push(amt * 0.1);
    jhonfinalAmt.push(amt * 0.1 + amt);
  }
}

function markCaltip(amt) {
  if (amt > 50) {
    marktip.push(amt * 0.2);
    markfinalAmt.push(amt * 0.2 + amt);
  } else if (amt > 50 && amt < 200) {
    marktip.push(amt * 0.15);
    markfinalAmt.push(amt * 0.15 + amt);
  } else if (amt > 200) {
    marktip.push(amt * 0.1);
    markfinalAmt.push(amt * 0.1 + amt);
  }
}

for (var i = 0; i < jhon.length; i++) {
  jhonCalltip(jhon[i]);
}
for (var i = 0; i < mark.length; i++) {
  markCaltip(mark[i]);
}

function JhonAvgTip() {
  for (var i = 0; i < jhontip.length; i++) {
    jhonAvg += jhontip[i];
  }
  jhonAvgFinal = jhonAvg / jhontip.length;
}

function markAvgTip() {
  for (var i = 0; i < marktip.length; i++) {
    markAvg += marktip[i];
  }
  markAvgFinal = markAvg / marktip.length;
}

JhonAvgTip();
markAvgTip();

console.log(jhontip);
console.log(jhonfinalAmt);

console.log(marktip);
console.log(markfinalAmt);

console.log(jhonAvgFinal);
console.log(markAvgFinal);
