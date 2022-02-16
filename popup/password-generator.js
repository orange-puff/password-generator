import { KEYS, update } from '../utils/storage-util.js';
import { generatePassword } from '../utils/password-generator-engine.js';

/**
* Listen for clicks on the buttons, and send the appropriate message to
* the content script in the page.
*/
function listen() {
    function getPassword() {
        browser.storage.local.get("storage")
            .then(res => {
                let password = '';
                if (Object.keys(res).length === 0) {
                    password = generatePassword(true, true, true, true);
                }
                else {
                    password = generatePassword(res.storage[KEYS[0]], res.storage[KEYS[1]], res.storage[KEYS[2]], res.storage[KEYS[3]]);
                }
                console.log(password);
                navigator.clipboard.writeText(password);
            });
    }

    document.addEventListener("click", (e) => {
        /**
        * Get the active tab, then call method handler for whichever button they chose
        */
        if (KEYS.some(key => e.target.classList.contains(key))) {
            const key = e.target.classList[0];
            const value = e.target.checked;
            update(key, value);
        }
        else if (e.target.classList.contains("button")) {
            getPassword();
        }
    });
}

/**
 * Basic UI updating when they open the popup, like highlighting whether the plugin is off or on
 */
function onStartUp() {
    browser.storage.local.get("storage")
        .then(res => {
            // set each selector to checked or unchecked
            KEYS.forEach(key => {
                const checked = Object.keys(res).length === 0 ? true : res.storage[key];
                const el = document.getElementsByClassName(key)[0];
                el.checked = checked;
            });
        });
}

try {
    onStartUp();
    listen();
}
catch (err) {
    reportExecuteScriptError(err);
}