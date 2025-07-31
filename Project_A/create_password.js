function checkPasswordStrength() {
    const password = document.getElementById("newPassword").value;
    const confirm = document.getElementById("confirmPassword").value;
    const message = document.getElementById("strengthMessage");

    if (password !== confirm) {
        message.textContent = "Passwords do not match!";
        message.style.color = "red";
    return;
    }

    let strength = "Weak";
    let color = "red";
    const strongRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}/;

    if (strongRegex.test(password)) {
    strength = "Strong";
    color = "green";
    } else if (password.length >= 6) {
    strength = "Medium";
    color = "orange";
    }

    message.textContent = `Password Strength: ${strength}`;
    message.style.color = color;
}
