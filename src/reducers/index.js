import { combineReducers } from 'redux';
import addTask from './addTask.js';
import todos from './todos.js';

const rootReducer = combineReducers({
  addTask,
  todos,
});

export default rootReducer;
