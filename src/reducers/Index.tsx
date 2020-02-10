// @ts-ignore
import {combineReducers} from 'redux';

import todos from './Todos'
import visibiltyFilter from './VisibilityFilter'
import creducer from './Counter'

const rootReducer = combineReducers({
  todos,
  visibiltyFilter,
  creducer
})

export default rootReducer