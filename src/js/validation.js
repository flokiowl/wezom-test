function trim(s) {
    return s.replace(/^\s+|\s+$/, '');
}
function validateEmail(email) {
    let temail = trim(email.value);
    let emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
    let illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;

    if (email.value == "") return "Пожалуйста, введите свой email.";
    else if (!emailFilter.test(temail)) return "Пожалуйста, введите действительный email.";
    else if (email.value.match(illegalChars)) return "Email содержит недопустимые символы.";
    else return 1;
}

function validatePassword(password) {
    if (password.value.length < 2) return "Минимум 4 символа.";
    else return 1
}

function validateSearch(search) {
    if (search.value.length < 2) return "Поле поиска не может содержать менее 2 символов.";
    else return 1
}

const subscribeBtn = document.querySelector('.footer__subscribe-btn');
const subscribeInput = document.querySelector('.footer__subscribe-input');
subscribeBtn.addEventListener('click', function() {
    if (validateEmail(subscribeInput) == 1) {
        document.querySelector('#mail_subscribe .footer__error').innerHTML = '';
        document.querySelector('.modal.subscribe').classList.add('open');
        subscribeInput.value = '';
        setTimeout(function() {
            document.querySelector('.modal.subscribe').classList.remove('open');
        }, 7000);
    } else {
        document.querySelector('#mail_subscribe .footer__error').innerHTML = validateEmail(subscribeInput)
    }
}, false);

const searchBtn = document.querySelector('.search__button');
const searchInput = document.querySelector('.search__input');
searchBtn.addEventListener('click', function() {
    if (validateSearch(searchInput) === 1) {
        document.getElementById('search__error').innerHTML = '';
    } else {
        document.getElementById('search__error').innerHTML =  validateSearch(searchInput)
    }
})

const signBtn = document.querySelector('.modal__form-enter');
const passwordInput = document.querySelector('#password');
const emailInput = document.querySelector('#email');

signBtn.addEventListener('click', function() {
    if (validateEmail(emailInput) === 1) {
        document.querySelector('#email__error').innerHTML = '';
    } else {
        document.querySelector('#email__error').innerHTML = validateEmail(emailInput);
    }

    if (validatePassword(passwordInput) === 1) {
        document.querySelector('#password__error').innerHTML = '';
    } else {
        document.querySelector('#password__error').innerHTML = validatePassword(passwordInput);
    }
})