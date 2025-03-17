const emailField = document.getElementById('input-email');
const passwordField = document.getElementById('input-password');
const noEmail = document.getElementById('message-no-email');
const invalidEmail = document.getElementById('message-invalid-email');
const noPassword = document.getElementById('message-password');
const loginButton = document.getElementById('signin-button');
const registerButton = document.getElementById('signup-button');
const errorSignin = document.getElementById('message-signin');

function checkEmail() {
    if (emailField.value != "") {
        noEmail.style.display = "none";
        if (validateEmail(emailField.value)) {
            invalidEmail.style.display = "none";
        } else {
            invalidEmail.style.display = "block";
        }
    } else {
        noEmail.style.display = "block";
        invalidEmail.style.display = "none";
    }
}

function checkPassword() {
    if (passwordField.value != "") {
        noPassword.style.display = "none";
    } else {
        noPassword.style.display = "block";
    }
}

function signin() {
    if (localStorage.getItem('email') == emailField.value && localStorage.getItem('password') == passwordField.value) {
        window.location.href = "logged.html";
        localStorage.clear();
        errorSignin.style.display = "none";
        emailField.value = "";
        passwordField.value = "";
    } else {
        errorSignin.style.display = "block";
    }
}

function signup() {
    if (validateEmail(emailField.value) && passwordField.value != "") {
        localStorage.setItem('email', emailField.value);
        localStorage.setItem('password', passwordField.value);
        noEmail.style.display = "none";
        noPassword.style.display = "none";
    } else {
        noEmail.style.display = "block";
        noPassword.style.display = "block";
        localStorage.clear();
    }
}


emailField.addEventListener('keyup', checkEmail);
passwordField.addEventListener('keyup', checkPassword);
loginButton.addEventListener('click', signin);
registerButton.addEventListener('click', signup);



function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }