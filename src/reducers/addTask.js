import { combineReducers } from 'redux';

import {
  UPDATE_ADD_TASK_FIELD,
  CLEAR_ADD_TASK_FIELDS,
} from '../actions/addTask.js';

const initialState = {
  newTask: {
    title: '',
    description: ''
  }
}

function newTask(state=initialState.newTask, action={}) {
  switch (action.type) {
    case UPDATE_ADD_TASK_FIELD:
      return {
        ...state,
        [action.field]: action.value
      };
    case CLEAR_ADD_TASK_FIELDS:
      return initialState.newTask;
    default:
      return state;
  }
}

export default combineReducers({
  newTask,
});
