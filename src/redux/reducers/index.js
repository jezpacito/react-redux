import { combineReducers } from 'redux'

import adminInfo from './admin.reducers'
import { authReducer }  from './authReducer'
import  users  from './userReducers'

export default combineReducers({
    userInfo:users,
    adminInfo: adminInfo,
    isLogged:authReducer
  })