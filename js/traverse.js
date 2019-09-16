$(document).ready(function() {
    $("p").click(function() {
        $("p").children("a").css("background-color", "yellow");
    });
});