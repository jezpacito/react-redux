import { combineReducers } from 'redux'

import  users  from './userReducers'
import adminInfo from './admin.reducers'

export default combineReducers({
    userInfo:users,
    adminInfo: adminInfo
  })