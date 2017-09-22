$(document).ready(function () {

    //hides all elements with the class "error"
    $('.error').hide();

    //select even elements with the class "input-group" and use .filter() to get even elements
    $('.input-group').filter(':even').addClass('even');

    //reusable error message function
    function validate() {
        var input = $(this);
        var inputValue = input.val();
        var errMsg = input.closest('.input-group').find('.requiredMsg');

        if (inputValue === '') {
            errMsg.fadeIn();
        } else {
            errMsg.fadeOut();
        }
    }
    //error message for invalid email
    function validateEmail() {
        var input = $(this);
        var inputValue = input.val();
        var errMsg = input.closest('.input-group').find('.emailMsg');

        if (inputValue.indexOf('@') === -1 || inputValue.indexOf('.com') === -1) {
            errMsg.fadeIn();
        } else {
            errMsg.fadeOut();
        }
    }
    //All hail jQuery
    $('#lastName').on('blur', validate);
    $('#firstName').on('blur', validate);
    $('#emailAddress').on('blur', validate);
    $('#emailAddress').on('blur', validateEmail);

});