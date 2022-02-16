const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';
const SYMBOLS = '*$&#@!';

export function generatePassword(lowercase, uppercase, number, symbol) {
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