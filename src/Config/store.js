import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import appReducer from '../Reducers/app'
import memberReducer from '../Reducers/member'
import eventReducer from '../Reducers/event'

const reducers = combineReducers({
    app: appReducer,
    members: memberReducer,
    events: eventReducer,
})

const middleware = applyMiddleware(logger, thunk)

export default createStore(reducers, middleware)