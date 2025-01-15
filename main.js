document.getElementById('registration-form').addEventListener("submit", function (e) {
e.preventDefault()

let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPass = document.getElementById('confirm-password');

[username, email, password, confirmPass].forEach(input => {
    input.classList.remove("valid", "invalid");
});

let isValid = true;

if(username.value.trim() === "") {
    username.classList.add("invalid");
    isValid = false;
}
else {
    username.classList.add("valid");
}

// emaail
let emailPatt = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailPatt.test(email.value)) {
    email.classList.add("invalid");
    isValid = false;
}
else {
    email.classList.add("valid");
}

// pass

if(password.value.trim() === "") {
    password.classList.add("invalid");
    isValid = false;
}
else{ 
    password.classList.add("valid");
}

// confirm

if(confirmPass.value !== password.value || confirmPass.value.trim() === "") {
    confirmPass.classList.add("invalid");
    isValid = false;
}
else {
    confirmPass.classList.add("valid");
}
if(isValid) {
    [username, email, password, confirmPass].forEach(input => {
        input.classList.add("valid");
    });
    alert("form is valid");

}
});