$(document).ready(function () {

    // Part 2
    // 1 Show
    $('#btnShow').on('click', part2Show);

    function part2Show() {
        $('.display-basic').show();
    }
    // 2 Hide
    $('#btnHide').on('click', part2Hide);

    function part2Hide() {
        $('.display-basic').hide();
    }

    // 3 Toggle
    $('#btnToggle').on('click', part2Toggle);

    function part2Toggle() {
        $('.display-basic').toggle();
    }

    // Part 3

    $('.part3').show();

    //Part 4
    // 1 fadeIN
    $('#btnFadeIn').on('click', part4FadeIn);

    function part4FadeIn() {
        $('.display-fade').fadeIn('fast');
    }

    // 2 fadeOut
    $('#btnFadeOut').on('click', part4FadeOut);

    function part4FadeOut() {
        $('.display-fade').fadeOut('slow');
    }

    // 3 fadeToggel
    $('#btnFadeToggle').on('click', part4FadeToggle);

    function part4FadeToggle() {
        $('.display-fade').fadeToggle();
    }

    //Part 5
    // 1 slideDown
    $('#btnSlideDown').on('click', part5SlideDown);

    function part5SlideDown() {
        $('.display-slide').slideDown(1000);
    }

    // 2 slideUp
    $('#btnSlideUp').on('click', part5SlideUp);

    function part5SlideUp() {
        $('.display-slide').slideUp(500);
    }

    // 3 slideToggle
    $('#btnSlideToggle').on('click', part5SlideToggle);

    function part5SlideToggle() {
        $('.display-slide').slideToggle();
    }


});