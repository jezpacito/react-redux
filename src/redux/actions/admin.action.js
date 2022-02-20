import { SET_ADMIN_INFO } from '../types';

//payload - request payload (obj)
export function setAdminInfo (payload) {
    return {
        type: SET_ADMIN_INFO,
        payload
    }
}