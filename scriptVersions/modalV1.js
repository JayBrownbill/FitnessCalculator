$(document).ready(function () {
  let modalDiv = $(`<div id="calculatorModal"></div>`);
  function CreateModalElement(modalDiv) {
    $("body").append(modalDiv);
    $("#calculatorModal").css("opacity", "0");
    $("#calculatorModal").css("position", "absolute");
    $("#calculatorModal").html(
      `<h2> WHY, WHY, WHY?! </h2> <br> <p class="modalTxt"> Knowing your personal calorie and protein requirements is the first step to achieving your goals, the JNPT+ calculator produces your intakes using the most reliable formulas to date, ensuring you get off to a strong start. </p><br/> <br/> <b> (We breakdown the reasons why we used these key nutrients in the nutrition guide)<b> <br> <br> <i> Calorie Calculation Used: Mifflin St-jeor Equation </i>`
    );
  }

  CreateModalElement(modalDiv);
  $("#calculatorModal").modal({
    fadeDuration: 1000,
    fadeDelay: 0,
  });
});
