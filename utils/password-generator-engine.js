import { KEYS } from './storage-util.js';

const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';
const SYMBOLS = '*$&#@!';

function generatePasswordHelper(lowercase, uppercase, number, symbol) {
    let alph = '';
    if (lowercase) {
        alph += LOWERCASE;
    }
    if (uppercase) {
        alph += UPPERCASE;
    }
    if (number) {
        alph += NUMBERS;
    }
    if (symbol) {
        alph += SYMBOLS;
    }

    if (alph === '') {
        return alph;
    }

    const length = Math.floor(Math.random() * 8) + 8;

    let toRet = '';
    for (let i = 0; i < length; i++) {
        const ind = Math.floor(Math.random() * alph.length);
        toRet += alph[ind];
    }

    return toRet;
}

export function generatePassword() {
    browser.storage.local.get("storage")
        .then(res => {
            let password = '';
            if (Object.keys(res).length === 0) {
                password = generatePasswordHelper(true, true, true, true);
            }
            else {
                password = generatePasswordHelper(res.storage[KEYS[0]], res.storage[KEYS[1]], res.storage[KEYS[2]], res.storage[KEYS[3]]);
            }
            navigator.clipboard.writeText(password);
        });
}