const baseURL = 'http://127.0.0.1:5000'

// apiGetPromise('/lookup/tsla') will return a promise with the json from the response to
// this GET request
export const apiGetPromise = (endpoint) => {
    const promise = fetch(baseURL + endpoint, {mode: 'cors'})
    return promise.then(response=>response.json())
}

export const apiPostPromise = (endpoint, json) => {
    const promise = fetch(baseURL + endpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        mode: 'cors',
        body: JSON.stringify(json)
    })
    return promise.then(response=>response.json())
}

export const apiPostFilePromise = (endpoint, file) => {
    const promise = fetch(baseURL, {
        method: 'POST',
        headers: {'Content-Type': 'multipart/form-data'},
        mode: 'cors',
        body: file
    })
}