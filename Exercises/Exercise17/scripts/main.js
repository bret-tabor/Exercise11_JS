$(document).ready(function(){

//hides all elements with the class "error"
    $('.error').hide();

//select even elements with the class "input-group" and use .filter() to get even elements
    $('.input-group').filter(':even').addClass('even');

//add blur to id 'firstName' and show error message if empty
$('#firstName').on('blur', function() {
    var firstName = $('#firstName').val();
    var errMsg = $(this).closest('.input-group').find('.requiredMsg');
    if (firstName == "") {
        errMsg.fadeIn();
    }
    else {
        errMsg.fadeOut();
    }
})
//add blur to id 'lastName' and show error message if empty
$('#lastName').on('blur', function() {
    var lastName = $('#lastName').val();
    var errMsg = $(this).closest('.input-group').find('.requiredMsg');
    if (lastName == "") {
        errMsg.fadeIn();
    }
    else {
        errMsg.fadeOut();
    }
})
//add blur to id 'emailAddress' and show error message if: empty, doesn't contain '@', or doesn't contain '.com'
$('#emailAddress').on('blur', function() {
    var emailAddress = $('#emailAddress').val();
    var errMsg = $(this).closest('.input-group').find('.emailMsg');
    if (emailAddress == "" || emailAddress.includes('@') === false || emailAddress.includes('.com') === false ) {
        errMsg.fadeIn();
    }
    else {
        errMsg.fadeOut();
    }
})


});
