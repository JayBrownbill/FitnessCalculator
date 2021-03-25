$(document).ready(function(){
    let gender;
    let goal;
    let height;
    let age;
    let weight;
    let activity;
    let result;
    let bmr;

    $('input[type=radio][name=gender]').change(function() {
            gender = this.value;
            console.log(gender);
    })

    $('input[type=radio][name=goal]').change(function() {
            goal = this.value;
            console.log(goal);
    })

    $('input[type=number][name=height]').change(function() {
            height = this.value;
            console.log(height);
    })

    $('input[type=number][name=age]').change(function() {
            age = this.value;
            console.log(age);
    })

    $('input[type=number][name=weight]').change(function() {
            weight = this.value;
            console.log(weight);
    })

    $('#activitylvl').change(function() {
            activity = this.value;
            console.log(activity);
    })

    function calculateBMR(gender, weight, height, age) {
        if (gender == 'male' ){

            alert('issa boy');
            result = ((10 * weight) + (6.25 * height)) - (5 * age) + 5
        }
        
        else if(gender == 'female' ){

            alert('issa girl');
            result = ((10 * weight) + (6.25 * height)) - (5 * age) - 161 
        }
        return result;
    }

    $("#calForm").submit(function (event){
        event.preventDefault();
        bmr = calculateBMR(gender, weight, height, age);
        console.log('BMR = ' + bmr);
    });
})
