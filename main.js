$(document).ready(function () {
  //Inititalize variables
  let gender;
  let goal;
  let height;
  let age;
  let weight;
  let activity;
  let activityMultiplier;
  let result;
  let bmr;
  let calorieGOAL;

  // Assign value of gender from form input
  $("input[type=radio][name=gender]").change(function () {
    gender = this.value;
    console.log(gender);
  });

  // Assign value of goal from form input
  $("input[type=radio][name=goal]").change(function () {
    goal = this.value;
    console.log(goal);
  });

  // Assign value of height from form input
  $("input[type=number][name=height]").change(function () {
    height = this.value;
    console.log(height);
  });

  // Assign value of age from form input
  $("input[type=number][name=age]").change(function () {
    age = this.value;
    console.log(age);
  });

  // Assign value of weight from form input
  $("input[type=number][name=weight]").change(function () {
    weight = this.value;
    console.log(weight);
  });

  // Assign activity level from form dropdown
  $("#activitylvl").change(function () {
    activity = this.value;
    console.log(activity);

    // switch statement dependent on value of dropdown selection
    switch (activity) {
      case "little":
        activityMultiplier = 1.2;
        break;

      case "light":
        activityMultiplier = 1.375;
        break;

      case "moderate":
        activityMultiplier = 1.55;
        break;

      case "active":
        activityMultiplier = 1.725;
        break;

      case "extra":
        activityMultiplier = 1.9;
        break;

      default:
        break;
    }
  });

  function calculateBMR(gender, weight, height, age) {
    // Choose gender specific formula (M)
    if (gender == "male") {
      result = 10 * weight + 6.25 * height - 5 * age + 5;
    }

    // Choose gender specific formula (F)
    else if (gender == "female") {
      result = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    return result;
  }

  function calculateGoal(caloricResult, goal) {
    switch (goal) {
      case "sigLoss":
        calorieGOAL = (caloricResult - 400);
        break;

      case "loss":
        calorieGOAL = (caloricResult - 200);
        break;

      case "maintain":
        calorieGOAL = caloricResult;
        break;

      case "gain":
        calorieGOAL = (caloricResult + 200);
        break;

      case "sigGain":
        calorieGOAL = (caloricResult + 400);
        break;

      default:
        break;
    }
    return calorieGOAL;
  }

  $("#calForm").submit(function (event) {
    // Stop form submission
    event.preventDefault();

    //Calculate BMR
    bmr = calculateBMR(gender, weight, height, age);

    //Calculate Caloric Result
    var caloricResult = bmr * activityMultiplier;

    //Calculate RESULTING CALORIE INTAKE GOALS
    const result = calculateGoal(caloricResult, goal);

    $("#calorieResult").text(result);

    console.log("BMR = " + bmr); //Debugging LOG
    console.log("Caloric Result = " + caloricResult); //Debugging LOG
    console.log("FINAL CALORIE INTAKE GOALS = " + result + `(${goal})`); //Debugging LOG
  });
});
