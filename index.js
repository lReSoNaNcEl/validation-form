var app = document.getElementById('app');
var btn = document.getElementById('btn');
var message = document.getElementById('message');
btn.addEventListener('click', function () {
    var errors = [];
    var username = document.getElementById('username').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (username === '' || phone === '' || email === '' || password === '') {
        message.textContent = 'Заполните пустые поля';
    }
    else {
        if (!/^[a-z]{1}[0-9a-z-_]+$/i.test(username))
            errors.push({
                field: 'username',
                description: 'Никнейм может состоять только из латинских букв, цифр, спец-символов [ - _ ] и начинаться с буквы',
                DOM: document.getElementById('username')
            });
        if (phone.length > 11)
            errors.push({
                field: 'phone',
                description: 'Телефон не должен быть больше 11 символов',
                DOM: document.getElementById('phone')
            });
        if (!/^[\d]{1,11}$/.test(phone))
            errors.push({
                field: 'phone',
                description: 'Неправильно указан телефон',
                DOM: document.getElementById('phone')
            });
        if (!/^[\w.-]+@[\w]+\.[a-z]{2,5}$/i.test(email))
            errors.push({
                field: 'email',
                description: 'Неправильно указана почта',
                DOM: document.getElementById('email')
            });
        if (password.length < 8)
            errors.push({
                field: 'password',
                description: 'Пароль не должен быть меньше 8 символов',
                DOM: document.getElementById('password')
            });
        if (!/^[a-z0-9_]+$/i.test(password))
            errors.push({
                field: 'password',
                description: 'Пароль должен состоять из латинских букв, цифр и спец-символа [ _ ]',
                DOM: document.getElementById('password')
            });
        message.textContent = JSON.stringify(errors);
        if (errors.length === 0)
            message.textContent = 'Вы успешно зарегистрированы';
        else {
            var data = void 0;
            for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
                var error = errors_1[_i];
                if (error !== undefined) {
                    data += error.field + ' ';
                    message.textContent = data;
                }
            }
        }
    }
    var signup = {
        username: username,
        phone: phone,
        email: email,
        password: password
    };
});
