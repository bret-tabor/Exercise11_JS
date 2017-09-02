var arrayItems = [];

function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    console.log(firstName);
    console.log(lastName);

// Populates "First Name + Last Name" field
var fullName = firstName + " " + lastName;
getElm("p1_fullName").innerHTML = fullName;

// Checks to see if First Name and Last Name are filled out
if ( firstName.length > 1 && lastName.length > 1)
{
    getElm("p1_valid").innerHTML = "Yes";
} else {
    getElm("p1_valid").innerHTML = "No";
}
// Calculates the number of characters in fullName
var fullNameLength = fullName.length - 1;
getElm("p1_fullNameLength").innerHTML = fullNameLength;

    // Part 2
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);

// Populates "Email" field
getElm("p2_email").innerHTML = emailAddress;

// Checks for "@" symbol
if (emailAddress.indexOf("@") > -1) {
getElm("p2_valid").innerHTML = "Yes";
} else {
    getElm("p2_valid").innerHTML = "No";
}

// Calculates the number of characters in Email Address
var emailLength = emailAddress.length;
getElm("p2_emailLength").innerHTML = emailLength; 

    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);

// Populates "Enter a Number" field
getElm("p3_number").innerHTML = randomNumber;

// Checks to see if the number entered is actually a number and outputs "Yes" or "No"
if ( parseInt(randomNumber) > 0 ) {
    getElm("p3_valid").innerHTML = "Yes";
} else {
    getElm("p3_valid").innerHTML = "No";
}


    // Part 4
    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);
// Pushes values entered in "Enter a Value" to the arrayItems array
arrayItems.push(arrayInput);

// lists the length of the array
getElm("p4_arraylength").innerHTML = arrayItems.length;

// lists the contents of the array
getElm("p4_valid").innerHTML = arrayItems;





    ////////////////////////Your code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}

