$(document).ready(function() {
    $(function () {
        $('#UKimage').click(function (e) {
            var X = e.pageX - $(this).offset().left;
            var Y = e.pageY - $(this).offset().top;
            $("#xy").html(X + " , " + Y);
        });
    });
});