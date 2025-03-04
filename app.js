let inputUser = document.getElementById('user');
let inputPassword = document.getElementById('password');



function log() {
    let inputUser = document.getElementById('user');
    let inputPassword = document.getElementById('password');
    let errorpassword = document.getElementById("invalid-password-error");
    let erroremail = document.getElementById("no-email-error");

    

    if (validateEmail(inputUser.value) && inputPassword.value != "") {
        window.location.href = "logged.html";
    } else {
        errorpassword.style.display = "inline";
        erroremail.style.display = "inline";
    }
}

function checkValid() {
    let errormessage = document.getElementById("invalid-email-error");
    let inputUser = document.getElementById('user');
    let errorpassword = document.getElementById("invalid-password-error");
    let erroremail = document.getElementById("no-email-error");

    if (inputUser.value != "") {
        erroremail.style.display = "none";
        if (validateEmail(inputUser.value)) {
            errormessage.style.display = "none";
        } else {
            errormessage.style.display = "inline";
        }
    } else {
        errormessage.style.display = "none";
    }

    if (inputPassword.value != "") {
        errorpassword.style.display = "none";
    }
}







function back() {
    window.location.href = "index.html";
}


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }