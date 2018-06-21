import {
  CREATE_TODO,
  DELETE_TODO,
  UPDATE_TODO_FIELD,
  MARK_TODO_AS_COMPLETE,
} from '../actions/todos.js';
import { guid } from '../helpers/util.js';

const initialState = {};

export default function todos(state=initialState, action={}) {
  switch (action.type) {
    case CREATE_TODO:
      const id = guid();
      return {
        ...state,
        [id]: {
          title: action.title,
          description: action.description,
          created: action.created,
          completed: false,
        }
      }
    case DELETE_TODO:
      const { [action.id]: removed, ...rest } = state;
      return rest;
    case UPDATE_TODO_FIELD:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.field]: action.value,
        }
      };
    case MARK_TODO_AS_COMPLETE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          completed: true,
        }
      }
    default:
      return state;
  }
}
