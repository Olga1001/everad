$(document).ready(function () {
    $(".burger").click(function () {
        $(this).toggleClass('active');
        $(".nav").slideToggle(300);
    });
    // $.scrollLock(true);
    // $.scrollLock(false);

});
