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
