import {SET_USER_INFO} from '../types';

const initialState = {
    info: {
        name:'user jezreel'
    }
};
const reducers = (state = initialState, action={}) => {
    switch(action.type) {
        case SET_USER_INFO:
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
export default reducers

/**
 * type is from userAction.js == type ex. SET_USER_INFO
 * get all state from redux-action (userAction.js) object return
 */

