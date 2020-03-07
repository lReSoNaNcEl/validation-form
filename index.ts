const app = document.getElementById('app')
const btn = document.getElementById('btn')
const message = document.getElementById('message')

interface ISignup {
    username: string,
    phone: string,
    email: string,
    password: string
}

interface IErrorValidation {
    field: string,
    description: string,
    DOM: HTMLElement
}

btn.addEventListener('click', () => {

    let errors: any = []

    const username = (<HTMLInputElement>document.getElementById('username')).value
    const phone = (<HTMLInputElement>document.getElementById('phone')).value
    const email = (<HTMLInputElement>document.getElementById('email')).value
    const password = (<HTMLInputElement>document.getElementById('password')).value

    if (username === '' || phone === '' || email === '' || password === '') {
        message.textContent = 'Заполните пустые поля'
    }
    else {

        if (!/^[a-z]{1}[0-9a-z-_]+$/i.test(username))
            errors.push(<IErrorValidation> {
                field: 'username',
                description: 'Никнейм может состоять только из латинских букв, цифр, спец-символов [ - _ ] и начинаться с буквы',
                DOM: document.getElementById('username')
            })

        if (phone.length > 11)
            errors.push(<IErrorValidation> {
                field: 'phone',
                description: 'Телефон не должен быть больше 11 символов',
                DOM: document.getElementById('phone')
            })

        if (!/^[\d]{1,11}$/.test(phone))
            errors.push(<IErrorValidation> {
                field: 'phone',
                description: 'Неправильно указан телефон',
                DOM: document.getElementById('phone')
            })

        if (!/^[\w.-]+@[\w]+\.[a-z]{2,5}$/i.test(email))
            errors.push(<IErrorValidation> {
                field: 'email',
                description: 'Неправильно указана почта',
                DOM: document.getElementById('email')
            })

        if (password.length < 8)
            errors.push(<IErrorValidation> {
                field: 'password',
                description: 'Пароль не должен быть меньше 8 символов',
                DOM: document.getElementById('password')
            })

        if (!/^[a-z0-9_]+$/i.test(password))
            errors.push(<IErrorValidation> {
                field: 'password',
                description: 'Пароль должен состоять из латинских букв, цифр и спец-символа [ _ ]',
                DOM: document.getElementById('password')
            })

        message.textContent = JSON.stringify(errors)

        if (errors.length === 0)
            message.textContent = 'Вы успешно зарегистрированы'
        else {
            let data: string;
            for (let error of errors) {
                if (error !== undefined) {
                    data += error.field + ' '
                    message.textContent = data
                }
            }
        }
    }

    const signup: ISignup = {
        username,
        phone,
        email,
        password
    }




})

