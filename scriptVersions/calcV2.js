$(document).ready(function () {
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
  let fullName;
  //Assign Gender via div click
  $("#genderMbtn").click(function () {
    gender = "male";
    console.log(gender);
    $(this).addClass("active");
    $(".gender_box_female").removeClass("active");
  });
  var maleBtn = document.getElementById("genderMbtn");
  $("#genderFbtn").click(function () {
    gender = "female";
    console.log(gender);

    $(".gender_box_male").removeClass("active");
    $(this).addClass("active");
  });
  /**********SET GOAL FOR WEIGHT GAIN OR LOSS **********/
  $("#sigLoss").click(function () {
    goal = "sigLoss";
    console.log(goal);
    $(this).addClass("active").siblings().removeClass("active");
  });
  $("#loss").click(function () {
    goal = "loss";
    console.log(goal);
    $(this).addClass("active").siblings().removeClass("active");
  });
  $("#maintain").click(function () {
    goal = "maintain";
    console.log(goal);
    $(this).addClass("active").siblings().removeClass("active");
  });
  $("#gain").click(function () {
    goal = "gain";
    console.log(goal);
    $(this).addClass("active").siblings().removeClass("active");
  });
  $("#sigGain").click(function () {
    goal = "sigGain";
    console.log(goal);
    $(this).addClass("active").siblings().removeClass("active");
  });
  /**********END OF GOALS SECTION **********/
  // Assign values from input
  $("input[type=text][name=fullName]").change(function () {
    fullName = this.value;
    console.log(fullName);
  });
  $("input[type=number][name=Height]").change(function () {
    height = this.value;
    console.log(height);
  });
  $("input[type=number][name=age-3]").change(function () {
    age = this.value;
    console.log(age);
  });
  $("input[type=number][name=Weight]").change(function () {
    weight = this.value;
    console.log(weight);
  });
  // Assign activity level from form dropdown
  $("#activityLvl").change(function () {
    activity = this.value;
    console.log(activity);
    // Dependent on value of dropdown selection
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
      default:
        break;
    }
  });
  function calculateBMR(gender, weight, height, age) {
    // Choose gender specific formula (M)
    if (gender == "male" || "Male") {
      result = 10 * weight + 6.25 * height - 5 * age + 5;
    }
    // Choose gender specific formula (F)
    else if (gender == "female" || "Female") {
      result = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    return result;
  }
  function calculateGoal(caloricResult, goal) {
    switch (goal) {
      case "sigLoss":
        calorieGOAL = caloricResult - 750;
        break;
      case "loss":
        calorieGOAL = caloricResult - 350;
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
    try {
      bmr = calculateBMR(gender, weight, height, age);
      //Calculate Caloric Result
      var caloricResult = bmr * activityMultiplier;
      //Calculate RESULTING CALORIE INTAKE GOALS
      const result = Math.round(calculateGoal(caloricResult, goal));

      if (isNaN(result)) {
        $("#calorieResult").css("font-size", "30px");
        $("#calorieResult").html(
          `<p> Oops! An Error occured with your submission <br> <br> <span class="error"> Please fill out the full form! </span> </p>`
        );
        $("#calorieResultMob").text(
          `<p> Oops! An Error occured with your submission <br> <br> <span class="error"> Please fill out the full form! </span> </p>`
        );

        // Calorie Calc fail Desktop Debug Log
        console.log("ERROR CALCULATION FAILED DUE TO MISSING INPUT");
        console.log("BMR = " + bmr); //Debugging LOG
        console.log("Caloric Result = " + caloricResult); //Debugging LOG
        console.log("FINAL CALORIE INTAKE GOALS = " + result + `(${goal})`); //Debugging LOG
      } else {
        // Calorie Calc Success Desktop Debug Log
        console.log("YAY, CALCULATION SUCCESS");
        console.log("BMR = " + bmr); //Debugging LOG
        console.log("Caloric Result = " + caloricResult); //Debugging LOG
        console.log("FINAL CALORIE INTAKE GOALS = " + result + `(${goal})`); //Debugging LOG

        $("#calorieResult").text(result);
        $("#calorieResultMob").text(result);
      }
    } catch (error) {
      $("#calorieResult").text("oops! An Error occured with your submission");
      $("#calorieResultMob").text(
        "oops! An Error occured with your submission"
      );
      console.log("Error: " + error);
    }
  });
  /** ADAPTATIONS FOR PROTEIN CALCULATOR **/
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
    $(this).addClass("active");
    $(".gender_box_female").removeClass("active");
  });

  $("#genderFbtnProt").click(function () {
    gender = "female";
    console.log(gender);
    $(this).addClass("active");
    $(".gender_box_male").removeClass("active");
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
    event.preventDefault();
    var proteinResult = Math.round(proteinWeight * proteinMultiplier);
    $("#proteinResult").text(proteinResult);
    console.log("Protien Needs = " + proteinResult); //Debugging LOG
    console.log(
      "FINAL PROTEIN INTAKE GOALS = " + proteinResult + `(${proteinGoals})`
    ); //Debugging LOG
  });

  // MOBILE CALCULATOR
  $("input[type=text][name=fullNameMob]").change(function () {
    fullName = this.value;
    console.log(fullName);
  });

  $("input[type=radio][name=Gender]").change(function () {
    gender = this.value;
    console.log(gender);
  });

  // Assign value of height from form input
  $("input[type=number][name=height]").change(function () {
    height = this.value;
    console.log(height);
  });

  $("input[type=number][name=ageCal]").change(function () {
    age = this.value;
    console.log(age);
  });

  $("input[type=number][name=weightCal]").change(function () {
    weight = this.value;
    console.log(weight);
  });

  // Assign weight goals level from dropdown
  $("#goals").change(function () {
    goal = this.value;
    console.log(goal);
  });

  // Assign activity level from form dropdown
  $("#activityLvl-2").change(function () {
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
      default:
        break;
    }

    //Calculate BMR
    bmr = calculateBMR(gender, weight, height, age);
    //Calculate calorie needs
    var caloricResult = bmr * activityMultiplier;

        switch (goal) {
      case "sigLoss":
        calorieGOAL = caloricResult - 750;
        break;
      case "loss":
        calorieGOAL = caloricResult - 350;
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

    var resultWithDecimal = calculateGoal(caloricResult, goal);

    //Remove decimal place & store result
    const result = Math.round(resultWithDecimal);

    if (isNaN(result)) {
      $("#calorieResultMob").css("font-size", "30px");
      $("#calorieResultMob").html(
        `<p> Oops! An Error occured with your submission <br> <br> <span class="error"> Please fill out the full form! </span> </p>`
      );
      $("#calorieResultMob").text(
        `<p> Oops! An Error occured with your submission <br> <br> <span class="error"> Please fill out the full form! </span> </p>`
      );

      // Calorie Calc fail Desktop Debug Log
      console.log("ERROR CALCULATION FAILED DUE TO MISSING INPUT");
      console.log("gender " + gender); //Debugging LOG
      console.log("Caloric Result = " + goal); //Debugging LOG
      console.log("BMR = " + bmr); //Debugging LOG
      console.log("Caloric Result = " + caloricResult); //Debugging LOG
      console.log("FINAL CALORIE INTAKE GOALS = " + result + `(${goal})`); //Debugging LOG
    } else {
      // Calorie Calc Success Desktop Debug Log
      console.log("YAY, CALCULATION SUCCESS");
      console.log("BMR = " + bmr); //Debugging LOG
      console.log("Caloric Result = " + caloricResult); //Debugging LOG
      console.log("FINAL CALORIE INTAKE GOALS = " + result + `(${goal})`); //Debugging LOG

      $("#calorieResult").text(result);
      $("#calorieResultMob").text(result);
    }
  });

  $("input[type=number][name=protWeight]").change(function () {
    proteinWeight = this.value;
    console.log(proteinWeight);
  });

  // Assign protein goals from dropdown
  $("#protTrainingGoals-2").change(function () {
    proteinGoals = this.value;
    console.log(proteinGoals);
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
    event.preventDefault();
    //Calculate Protein Needs
    var proteinResult = Math.round(proteinWeight * proteinMultiplier);
    $("#proteinResultMob").text(proteinResult);

    //Protein Console Debugging
    console.log("Protein Needs = " + proteinResult);
    console.log(
      "FINAL PROTEIN INTAKE GOALS = " + proteinResult + `(${proteinGoals})`
    );
  });
}); //END
