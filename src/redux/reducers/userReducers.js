import { ADD_USER_INFO, DELETE_USER_INFO, SET_USER_INFO } from '../types';

const initialState = [
    {
      id: 1,
      name: "Jezreel",
      age: 12
    },
    {
        id: 2,
        name: "John",
        age: 87
      },
    {
      id: 3,
      name: "Jane",
      age: 432
    },
  ]

const reducers = (state = initialState, action) => {
    const {payload, type} = action
    switch (type) {
        case SET_USER_INFO:
          return [...state, payload]
        case ADD_USER_INFO:
            return [...state, payload]
        case DELETE_USER_INFO:
          const filteredUser = state.filter(obj => obj.id !== payload.id)
          return filteredUser
        default:
          return state
      }
    
}

export default reducers

/**
 * type is from userAction.js == type ex. SET_USER_INFO
 * get all state from redux-action (userAction.js) object return
 */

