/**
 * ### References
 * - [MDN Web Docs - localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
 */
export class LocalCache {

    static set(key, value) {
        if (typeof value === "string" || value instanceof String) {
            console.log("value is a string")
        } else {
            value = JSON.stringify(value)
        }
        localStorage.setItem(key, value)
    }

    static get(key) {
        localStorage.getItem(key)
    }

}