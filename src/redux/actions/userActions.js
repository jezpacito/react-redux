import { SET_USER_INFO } from '../types';

//payload - request payload (obj)
export function setUserInfo (payload) {
    return {
        type: SET_USER_INFO,
        payload
    }
}