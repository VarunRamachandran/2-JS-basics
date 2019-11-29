let jhon = {
  fullName: "Jhon Smith",
  bills: [124, 48, 268, 180, 42],
  calTips: function() {
    this.jhontip = [];
    this.jhonfinalAmt = [];
    for (var i = 0; i < this.bills.length; i++) {
      var bill = this.bills[i];
      if (bill < 50) {
        this.jhontip.push(bill * 0.2);
        this.jhonfinalAmt.push(bill * 0.2 + bill);
      } else if (bill > 50 && bill < 200) {
        this.jhontip.push(bill * 0.15);
        this.jhonfinalAmt.push(bill * 0.15 + bill);
      } else if (bill > 200) {
        this.jhontip.push(bill * 0.1);
        this.jhonfinalAmt.push(bill * 0.1 + bill);
      }
    }
  }
};

jhon.calTips();
console.log(jhon);

let mark = {
  fullName: "Mark Dan",
  bills: [124, 48, 268, 180, 42],
  calTips: function() {
    this.marktip = [];
    this.markfinalAmt = [];
    for (var i = 0; i < this.bills.length; i++) {
      var bill = this.bills[i];
      if (bill < 50) {
        this.marktip.push(bill * 0.2);
        this.markfinalAmt.push(bill * 0.2 + bill);
      } else if (bill > 50 && bill < 200) {
        this.marktip.push(bill * 0.15);
        this.markfinalAmt.push(bill * 0.15 + bill);
      } else if (bill > 200) {
        this.marktip.push(bill * 0.1);
        this.markfinalAmt.push(bill * 0.1 + bill);
      }
    }
  }
};

mark.calTips();
console.log(mark);

let markAvg = 0;
let jhonAvg = 0;

let jhonAvgFinal = [];
let markAvgFinal = [];

function JhonAvgTip() {
  for (var i = 0; i < jhon.jhontip.length; i++) {
    jhonAvg += jhon.jhontip[i];
  }
  jhonAvgFinal = jhonAvg / jhon.jhontip.length;
}

function markAvgTip() {
  for (var i = 0; i < mark.marktip.length; i++) {
    markAvg += mark.marktip[i];
  }
  markAvgFinal = markAvg / mark.marktip.length;
}
jhon.average = JhonAvgTip();
mark.average = markAvgTip();
console.log(jhonAvgFinal);
console.log(markAvgFinal);

if (jhon.average > mark.average) {
  console.log("Jhon's family pays higher");
} else {
  console.log("Mark's family pays higher");
}
