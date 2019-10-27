//Use RegEx to validate form

//Checks if first name is typed in or not. 
var fname = document.getElementById("name").innerHTML;

if (fname == null || fname == "") {
console.log("Don't forget your first name");
} else {
    console.log("The first name is entered");
    }

//Checks if last name is typed in or not. 
var lastName = document.getElementById("lname").innerHTML;

if (lastName == null || lastName =="") {
    console.log("Don't forget your last name");
} else {
    console.log("The last name is entered");
}

//validates that input in phone number is infact numbers
var pnumber = document.getElementById("pnumber").innerHTML;
var phoneLetters = /[0-9]/;

function validatePhoneNumber() {

    if (pnumber == phoneLetters.match) {
    return true;
    } else {
        console.log("Please enter a phonenumber containing only digits.");
        return false;
    }
}

validatePhoneNumber();

//validates that input in email is an email
var email = document.getElementById("email").innerHTML;
var emailLetters = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function validateEmail() {

    if (email == emailLetters.match) {
        return true;
    }else {
        console.log("Please enter an email");
        return false;
    }
}

validateEmail();

// Tests the regEx and my validations when the button is clicked

function checkUserEntry() {
    var send = document.getElementById("theButton");
    send.onclick = fname, lastName, validatePhoneNumber, validateEmail;
}

checkUserEntry();


