$(function () {
    $('#btnSubmit').on('click', submit);


    function submit() {
        //Create new array.
        var messages = [];

        //If First Name is empty. Add it to the array
        var firstName = getValue('firstName');
        if (firstName.length === 0) {
            messages.push(' Your first name is required');
            getElm('firstName').classList.add("errorBox");
        } else {
            getElm('firstName').classList.remove("errorBox");
        }
        //If Last Name is empty. Add it to the array
        var lastName = getValue('lastName');
        if (lastName.length === 0) {
            messages.push(' Your Last name is required');
            getElm('lastName').classList.add("errorBox");
        } else {
            getElm('lastName').classList.remove("errorBox");
        }
        //If Email is empty and invalid. Add it to the array
        var Email = getValue('Email');
        if (Email.includes('@') === false || Email.includes('.com') === false) {
            messages.push(' A valid email address is required');
            getElm('Email').classList.add("errorBox");
        } else {
            getElm('Email').classList.remove("errorBox");
        }
        // If "How did you find us?" is not selected. Add it to the array
        var findUs = getValue('findUs');
        if (findUs.length === 0) {
            messages.push(' You must select a response');
            getElm('findUs').classList.add("errorBox");
        } else {
            getElm('findUs').classList.remove("errorBox");
        }

        //If "Why do you need this blender?" is empty. Add it to the array
        var Why = getValue('Why');
        if (Why.length < 10) {
            messages.push(' Please tell us why you need this blender');
            getElm('Why').classList.add("errorBox");
        } else {
            getElm('Why').classList.remove("errorBox");
        }

        if ($('#terms').prop('checked') === false) {
            messages.push(' Please Accept Our Terms and Conditions');
        }

        //Loop through array and add messages to the innerHTML of the error-list id
        for (i = 0; i < messages.length; i++) {
            getElm('error-list').innerHTML = messages;
        }

        //Check to see if everything is valid
        if (messages.length === 0) {
            var submittedDate = new Date();
            alert("Submitted Successfully on " + submittedDate.toDateString());
            getElm('error-list').innerHTML = "";
            document.forms["myForm"].reset();
        }
    }
});

// getElementById
function getElm(id) {
    return document.getElementById(id);
}

// get value of the element
function getValue(id) {
    return getElm(id).value;
}