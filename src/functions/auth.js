// import { post } from "./request"

export function getPrevSignedIn() {
    return localStorage.getItem('SignedIn')
}

export function setPrevSignedIn(s) {
    if (s)
        localStorage.setItem('SignedIn', '1')
    else
        localStorage.removeItem('SignedIn')
}

// export function logAuth(data: Record<any, any>) {
//     return post("/l", btoa(JSON.stringify(data)));
// }