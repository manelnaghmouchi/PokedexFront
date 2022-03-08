

let apiURL = 'http://localhost:8000'
if (!window.location.hostname.includes("localhost")) {
    apiURL = ''
}
export {apiURL}
