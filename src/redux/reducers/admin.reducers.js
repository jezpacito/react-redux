import {SET_ADMIN_INFO} from '../types';

const initialState = {
    adminInfo: {
        name:'admin jezreel'
    }
};
const adminReducers = (state = initialState, action={}) => {
    switch(action.type) {
        case SET_ADMIN_INFO:
            return {
                ...state,
                info: {
                   ...state.info,
                   ...action.payload
                }
            }
            default: return state
    }
    
}
export default adminReducers

/**
 * type is from userAction.js == type ex. SET_USER_INFO
 * get all state from redux-action (userAction.js) object return
 */

