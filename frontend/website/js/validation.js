// BEKZODAKA NIMA GAPLAAAR????????
const contactInput = document.querySelector('.contact-group'),
    groupInner = document.querySelector('.group-inner'),
    password = document.querySelector('#password'),
    passwordEye = document.querySelector('.eye-password');

contactInput.addEventListener('click', function() {
    groupInner.classList.toggle('group-inner__active');
});

passwordEye.addEventListener('mousedown', function() {
    password.setAttribute('type', 'text');
    passwordEye.setAttribute('class', 'fa-solid fa-eye eye-password')
});

passwordEye.addEventListener('mouseup', function() {
    password.setAttribute('type', 'password');
    passwordEye.setAttribute('class', 'fa-solid fa-eye-slash eye-password');
});

// Validation form
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const sherifInput = document.querySelector('#sherif');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmInput = document.querySelector('#confirm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
    passwordEye.style.display = 'none';
});

function checkInputs() {
    const usernameValue = nameInput.value.trim();
    const surnameValue = surnameInput.value.trim();
    const sherifValue = sherifInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const confirmValue = confirmInput.value.trim();

    if (usernameValue === '') {
        setErrorFor(nameInput, 'Foydalanuvchi nomi bo\'sh bo\'lishi mumkin emas ')
    } else {
        setSuccessFor(nameInput);
    }
    if (surnameValue === '') {
        setErrorFor(surnameInput, 'Familiya nomi bo\'sh bo\'lishi mumkin emas ')
    } else {
        setSuccessFor(surnameInput);
    }
    if (sherifValue === '') {
        setErrorFor(sherifInput, 'Sharif nomi bo\'sh bo\'lishi mumkin emas ')
    } else {
        setSuccessFor(sherifInput);
    }
    if (emailValue === '') {
        setErrorFor(emailInput, 'Pochta joy bo\sh bo\'lishi mumkin emas ')
    } else if (!isEmail(emailValue)) {
        setErrorFor(emailInput, '')
    } else {
        setSuccessFor(emailInput)
    }
    if (passwordValue === '') {
        setErrorFor(passwordInput, 'Password cannot be blank')
    } else {
        setSuccessFor(passwordInput);
    }
    if (confirmValue === '') {
        setErrorFor(confirmInput, 'Parol bo\'sh bo\'lishi mumkin emas')
    } else if (passwordValue !== confirmValue) {
        setErrorFor(confirmInput, "Parolingiz mos emas!")
    } else {
        setSuccessFor(confirmInput);
    }
}

function setErrorFor(input, message) {
    const contactItem = input.parentElement;
    const small = contactItem.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    contactItem.className = 'contact__item error';
}

function setSuccessFor(input, message) {
    const contactItem = input.parentElement;
    contactItem.className = 'contact__item success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
// BEKZODAKA NIMA GAPLAAAR???????? ENDS