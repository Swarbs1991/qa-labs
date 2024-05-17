$(document).ready(function() {
    function validateAge() {
        var age = $("#age").val();;

        if (age >= 18 ) {
        // you are above 18
        alert("above 18");
        $('#age').removeClass('invalid');
        } else {
        alert("below 18");
        $('#age').addClass('invalid');
        $('.wrap').append('<span class="invalid oopsie">You are underrage</span>'); 
        }
    }

    $('input#age').on('keypress', function (event) {
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);

        // Check if the entered key is a number
        if (isNaN(key) || key.trim() === "") {
            event.preventDefault();
            return false;
        }
    });

    $("#checkAgeButton").on("click", function() {
        validateAge();
    });

});