function bmiCalculator(weight, height) {
  var bmi = weight / (Math.pow(height, 2));
  return Math.round(bmi);
}

console.log(bmiCalculator(65, 1.8));