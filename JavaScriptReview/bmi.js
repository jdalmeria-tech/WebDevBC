function bmiCalculator(weight, height) {
  let bmi = weight / (Math.pow(height, 2));
  bmi = Math.round(bmi * 10) / 10;
  var interpretation = "";

  if (bmi < 18.5) {
    interpretation = "Your BMI is " + bmi + ", so you are underweight.";
  }
  if (bmi >= 18.5 && bmi <= 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
  }

  else if (bmi >= 25) {
    interpretation = "Your BMI is " + bmi + ", so you are overweight.";
  }
  return interpretation;
}

console.log(bmiCalculator(65, 1.8));