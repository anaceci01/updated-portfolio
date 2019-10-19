// variables//
var name = document.getElementById('name');
var email = document.getElementById('email');
var subject = document.getElementById('subject');
var message = document.getElementById('message');




// Contact Form //
if(name.value == "") {
    alert("Please enter your name.");
    name.focus();
    return false;
    console.log(alert)
}
if (email.value == "") {
    alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
}
if (email.value.indexOf("@", 0) < 0) {
    alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
}
if (email.value.indexOf(".", 0) < 0) {
    alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
}
if (subject.value == "") {
    alert("Please enter a subject.");
    return false;
}
return true;


