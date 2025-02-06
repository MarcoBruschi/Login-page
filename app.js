function log() {
    let inputUser = document.getElementById('user').value;
    let inputPassword = document.getElementById('password').value;
    
    if (inputUser == 'user' && inputPassword == '123') {
        inputUser = '';
        inputPassword = '';
        window.location.href = "logged.html";

    } else {
        inputUser = '';
        inputPassword = '';
        alert(`This user doesn't exist`);
    }
}

function back() {
    window.location.href = "index.html";
}