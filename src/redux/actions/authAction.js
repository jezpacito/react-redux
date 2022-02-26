import { Is_LoggedIn, Is_LoggedOut } from "../types";

export function setLogin (payload) {
    return {
        type: Is_LoggedIn,
        payload
    }
}
export function LoggedOut (payload) {
    return {
        type: Is_LoggedOut,
        payload
    }
}
