export const KEYS = ["lowercase", "uppercase", "number", "symbol"];

function createEmptyStorage() {
    const toRet = { storage: {} };
    KEYS.forEach(key => {
        toRet.storage[key] = true;
    });
    return toRet;
}

export function update(key, val) {
    browser.storage.local.get("storage")
        .then(res => {
            if (Object.keys(res).length === 0) {
                res = createEmptyStorage();
            }

            res.storage[key] = val;
            browser.storage.local.set(res);
        });
}