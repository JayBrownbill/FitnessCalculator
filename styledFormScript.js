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
  let counterElement;

  //Assign Gender via div click
  $("#genderMbtn").click(function () {
    gender = "male";
    console.log(gender);
  });
  $("#genderFbtn").click(function () {
    gender = "female";
    console.log(gender);
  });

  /**********SET GOAL FOR WEIGHT GAIN OR LOSS **********/
  $("#sigLoss").click(function () {
    goal = "sigLoss";
    console.log(goal);
  });

  $("#loss").click(function () {
    goal = "loss";
    console.log(goal);
  });

  $("#maintain").click(function () {
    goal = "maintain";
    console.log(goal);
  });

  $("#gain").click(function () {
    goal = "gain";
    console.log(goal);
  });

  $("#sigGain").click(function () {
    goal = "sigGain";
    console.log(goal);
  });
  /**********END OF GOALS SECTION **********/

  // Assign value of height from form input
  $("input[type=number][name=Height]").change(function () {
    height = this.value;
    console.log(height);
  });

  // Assign value of age from form input
  $("input[type=number][name=age-3]").change(function () {
    age = this.value;
    console.log(age);
  });

  // Assign value of weight from form input
  $("input[type=number][name=Weight]").change(function () {
    weight = this.value;
    console.log(weight);
  });

  // Assign activity level from form dropdown
  $("#activityLvl").change(function () {
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
        calorieGOAL = caloricResult - 400;
        break;

      case "loss":
        calorieGOAL = caloricResult - 200;
        break;

      case "maintain":
        calorieGOAL = caloricResult;
        break;

      case "gain":
        calorieGOAL = caloricResult + 200;
        break;

      case "sigGain":
        calorieGOAL = caloricResult + 400;
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




  /************* ADAPTATIONS FOR PROTEIN CALCULATOR  *************/
  let proteinWeight;
  let proteinGoals;
  let proteinMultiplier;

  // Assign value of weight from form input
  $("input[type=number][name=proteinWeight]").change(function () {
    proteinWeight = this.value;
    console.log(proteinWeight);
  });

  //Assign Gender via div click
  $("#genderMbtnProt").click(function () {
    gender = "male";
    console.log(gender);
  });

  $("#genderFbtnProt").click(function () {
    gender = "female";
    console.log(gender);
  });

  // Assign protein goals from dropdown
  $("#proteinGoals").change(function () {
    proteinGoals = this.value;
    console.log(proteinGoals);

    // switch statement dependent on value of dropdown selection
    switch (proteinGoals) {
      case "strictEndurance":
        proteinMultiplier = 1.2;
        break;

      case "primaryEndurance":
        proteinMultiplier = 1.4;
        break;

      case "newProtein":
        proteinMultiplier = 1.8;
        break;

      case "maxProtein":
        proteinMultiplier = 2;
        break;

      default:
        break;
    }
  });


  $("#proForm").submit(function (event) {
    // Stop form submission
    event.preventDefault();

    //Calculate Protein Needs
    var proteinResult = (proteinWeight * proteinMultiplier);


    $("#proteinResult").text(proteinResult);

    console.log("Protien Needs = " + proteinResult); //Debugging LOG
    console.log("FINAL PROTEIN INTAKE GOALS = " + proteinResult + `(${proteinGoals})`); //Debugging LOG
  });
});

//   BROKEN COUNTER FEATURE

//   function initResultCounter(element, countValue) {

//       for (let i = 0; i < countValue; i++) {
//         setTimeout(() => {}, 2000);
//         element.text(i);
//         console.log(i);
//       }
//   }

// counterElement = $("#calorieResult");
// initResultCounter(counterElement, result);