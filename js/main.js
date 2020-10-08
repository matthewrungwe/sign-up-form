'use strict'
console.log('Your\'re here. \nWelcome to my Sign Up form.');

const submitBtn = document.querySelector('.submit-btn');
const invalidMsgs = document.querySelectorAll('.invalid-message');

const defaultSettings = () => {
    for(let msg = 0; msg < invalidMsgs.length; msg++) {
        invalidMsgs[msg].style.display = 'none';
    }
};

submitBtn.onclick = () => {
    for(let msg = 0; msg < invalidMsgs.length; msg++) {
        invalidMsgs[msg].style.display = 'block';
    }
};

defaultSettings();

