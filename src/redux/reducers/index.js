import { combineReducers } from 'redux'

import adminInfo from './admin.reducers'
import  users  from './userReducers'

export default combineReducers({
    userInfo:users,
    adminInfo: adminInfo
  })