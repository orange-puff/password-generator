import { generatePassword } from '../utils/password-generator-engine.js';

console.log('fuck me')

function handleMessage(request, sender, sendResponse) {
    console.log('yo');
    if (request.messageName === "generatePassword") {
        generatePassword();
    }
}

browser.runtime.onMessage.addListener(handleMessage);
