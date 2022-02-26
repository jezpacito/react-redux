import { Is_LoggedIn, Is_LoggedOut } from "../types";

const isLogged = false;

export const authReducer = (state = isLogged, action) => {
    switch(action.type){
        case Is_LoggedIn:
        return (state = true)
        case Is_LoggedOut:
            return(state = false)
            default: return state
    }
}
