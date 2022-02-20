import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { applyMiddleware, compose, createStore } from 'redux'

import rootReducers from './reducers'

const middlewares = compose(applyMiddleware(thunk, logger))


export default createStore(rootReducers , middlewares)

/**notes */
/**
 * remove redux-logger in production mode
 * thunk help to update state in redux
 */


/** redux analogy */

/**
 * store - 7/11 store (data)
 * actions - sales lady (functions, SET,GET etc.)
 * reducers - POS machine (logic ,algo etc.)
 */
