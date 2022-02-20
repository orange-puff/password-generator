import { generatePassword } from '../utils/password-generator-engine.js';

function handleMessage(request, sender, sendResponse) {
    if (request.messageName === "generatePassword") {
        generatePassword();
    }
}

browser.runtime.onMessage.addListener(handleMessage);
