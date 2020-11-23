'use strict';

function generatePassword() {
    const showPass = document.querySelector('#viewPassword');
    const inputPass = document.querySelector('#inputLength');

    const symbols = '1234567890!@#$%^&*()-_=+;:][}{/?.,qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let password = '';

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function generate(passLength) {
        const symbolPosition = getRandomInt(0, 87);
        password += symbols.charAt(symbolPosition);
        passLength--;

        if (passLength != 0) {
            generate(passLength);
        }
    }

    function askPassLength() {
        return parseInt(prompt('Введите длинну пароля'));
    }

    generate(askPassLength());
    showPass.innerHTML = (`Ваш пароль: ${password}`);
}