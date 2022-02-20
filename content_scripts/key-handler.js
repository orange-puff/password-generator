let downKeys = [];

const KEYS = ["Control", "g"];

document.addEventListener('keydown', function (e) {
    downKeys.push(e.key);

    let contains = true;
    KEYS.forEach(key => contains &= downKeys.indexOf(key) >= 0);
    if (contains) {
        browser.runtime.sendMessage({
            messageName: "generatePassword"
        });
    }
});

document.addEventListener('keyup', function (e) {
    const key = e.key;

    let i = 0;
    while (true) {
        if (i >= downKeys.length) {
            break;
        }
        if (downKeys[i] === key) {
            downKeys.splice(i, 1);
        }
        else {
            i++;
        }
    }
});