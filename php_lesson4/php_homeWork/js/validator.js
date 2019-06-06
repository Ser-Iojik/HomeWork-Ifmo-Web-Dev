let form = document.querySelector('.formWithValidation');
let validateBtn = form.querySelector('.validateBtn');
let login = form.querySelector('.login');
let password = form.querySelector('.password');
let passwordConfirmation = form.querySelector('.passwordConfirmation');
let fields = form.querySelectorAll('.field');

    
let generateError = function (text) {
    let error = document.createElement('div');
    error.className = 'error';
    error.style.color = 'red';
    error.innerHTML = text;
    return error;
}
window.onload = function () {

form.addEventListener('submit', function (event) {
/*     event.preventDefault(); // запрещение поведения по умолчанию, чтоб форма не отправлялась */

/*  console.log('clicked on validate');
    console.log('login: ', login.value);
    console.log('password: ', password.value);
    console.log('passwordConfirmation: ', passwordConfirmation.value);
*/
    let errors = form.querySelectorAll('.error'); // удаляем ошибки, чтобы они не накапливались

    for (let i = 0; i < errors.length; i++) {
        errors[i].remove();
    }

    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            console.log('field is blank', fields[i]);

            let error = generateError('Cannot be blank'); // обращение к функции для создания ошибки
            form[i].parentElement.insertBefore(error, fields[i]);
        }
    }

        if (password.value !== passwordConfirmation.value) {
            console.log('not equals');

            let error = generateError("Passwords doesn't match");
            password.parentElement.insertBefore(error, password);
        }

        let form_data = new FormData(form);
        let xhr = new XMLHttpRequest();
        xhr.open("POST", '/php_homeWork/confirm.php', true);
        xhr.send(form_data);
})}
