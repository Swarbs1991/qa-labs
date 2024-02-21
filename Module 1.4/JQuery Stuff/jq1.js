$(function () {
    var currentIndex = 1; // Initialize the index to 1

    function addName() {
        // Use jQuery to extract the name the user has entered
        var userName = $('#userName').val();

        // Use jQuery to append the new name to the "names" div
        $('#names ol').append('<li>' + userName + '</li>')
        $("li:nth-child(even)").addClass('highlight');  
        // Return false to prevent the form from submitting
        return false;
    }

    // Invoking addName function when the form is submitted
    $('form').submit(addName);

    $(".show-hide").click(function() {
            $('#names').toggleClass('hide');
    });

    // Click event for elements with class "blacklight"
    $(".blackout").click(function () {
        // Remove the "blacklight" class from the current li
        $('#names ol li.blacklight').removeClass('blacklight');
        //$('#names ol li.blacklight::marker').removeClass('blacklight');

        // Add the "blacklight" class to the next li
        $('#names ol li').eq(currentIndex).addClass('blacklight');
        //$('#names ol li::marker').addClass('blacklight');

        // Update the currentIndex for the next click
        currentIndex = (currentIndex + 1) % $('#names ol li').length;
    });

});
