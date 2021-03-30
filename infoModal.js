$(document).ready(function () {

    let modalDiv = $(`<div id="calculatorModal"> <h2> WHY, WHY, WHY?! </h2> <br> Knowing your personal calorie and protein requirements is the first step to achieving your goals, the JNPT+ calculator produces your intakes using the most reliable formulas to date, ensuring you get off to a strong start.<br/> <br/> <b> (We breakdown the reasons why we used these key nutrients in the nutrition guide)<b> <br> <br> <i> Calorie Calculation Used: Mifflin St-jeor Equation </i> </div>`);
    function ModalPopup(modalDiv) {  
        $("body").append (`<div class="modalOverlay"> </div>`);
        $("body").append (modalDiv);
        $("body").append ();
    }

    ModalPopup(modalDiv);
    // $("#calculatorModal").css("position","absolute");
});