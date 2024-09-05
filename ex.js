// script.js

document.addEventListener('DOMContentLoaded', function () {
    const signUpForm = document.getElementById('signUpForm');
    const errorMessage = document.getElementById('errorMessage');

    // Handle role selection
    document.getElementById('farmerBtn').addEventListener('click', () => {
        signUpForm.setAttribute('data-role', 'farmer');
    });

    document.getElementById('consumerBtn').addEventListener('click', () => {
        signUpForm.setAttribute('data-role', 'consumer');
    });

    // Handle form submission
    signUpForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const role = signUpForm.getAttribute('data-role');
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;

        // Mock login validation and redirection
        if (role === 'farmer') {
            window.location.href = 'ex2.html';
        } else if (role === 'consumer') {
            window.location.href = 'ex3.html';
        } else {
            errorMessage.textContent = 'Please select a role to continue.';
        }
    });
});
