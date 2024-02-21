$(document).ready(function () {
    function addName() {
        // Use jQuery to extract the name the user has entered
        var userName = $('#userName').val();

        // Use jQuery to append the new name to the "names" div
        $('#names').append('<div>' + userName + '</div>');

        // Return false to prevent the form from submitting
        return false;
    }

    // Invoking addName function when the form is submitted
    $('form').submit(addName);
});