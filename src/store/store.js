import { createStore, combineReducers } from 'redux'
import { firstReducer } from './reducers/FIRST_REDUCER'
import { counterReducer } from './reducers/COUNTER_REDUCER'

// const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose
let reducers = combineReducers({
  firstReducer,
  counterReducer
})

let store = createStore(reducers)

export default store