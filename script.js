var jhon = {
  fullName: "Jhon Pane",
  mass: 120,
  height: 1.72,
  bmi: function() {
    return (this.mass / this.height) * 2;
  }
};

var mark = {
  fullName: "Mark Daluca",
  mass: 130,
  height: 1.92,
  bmi: function() {
    return (this.mass / this.height) * 2;
  }
};

if (jhon.bmi > mark.bmi) {
  console.log(jhon.fullName + " has higher BMI with" + jhon.bmi);
} else if (jhon.bmi < mark.bmi) {
  console.log(mark.fullName + " has higher BMI with" + mark.bmi);
} else {
  console.log(jhon.fullName + " and " + mark.fullName + " have the same BMI");
}
