export const sendRequest = async ({ url, method, body }) => {
    return await fetch(url, {
        method,
        mode: 'cors',
        body,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    })
};