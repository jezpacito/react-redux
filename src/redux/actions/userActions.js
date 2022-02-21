import { ADD_USER_INFO, DELETE_USER_INFO, SET_USER_INFO } from '../types';

//payload - request payload (obj)
export function setUserInfo (payload) {
    return {
        type: SET_USER_INFO,
        payload
    }
}

export function storeUserInfo(payload) {
 return {
     type: ADD_USER_INFO,
     payload
 }
}

export function deleteUserInfo(id) {
    return {
        type:DELETE_USER_INFO,
        payload:{id}
    }
}