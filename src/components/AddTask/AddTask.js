import { connect } from 'react-redux';

import AddTaskView from './AddTaskView';
import {
  UPDATE_ADD_TASK_FIELD,
  CLEAR_ADD_TASK_FIELDS,
} from '../../actions/addTask.js';
import {
  CREATE_TODO
} from '../../actions/todos.js';
import {
  selectTask
} from '../../selectors/addTask.js'

const mapStateToProps = (state) => {
  return {
    newTask: selectTask(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAddTaskField: (field, value) => {
      dispatch({
        type: UPDATE_ADD_TASK_FIELD,
        field,
        value
      });
    },
    clearAddTaskFields: () => {
      dispatch({ type: CLEAR_ADD_TASK_FIELDS })
    },
    createTodo: (newTask) => {
      dispatch({
        type: CREATE_TODO,
        created: new Date(),
        ...newTask,
      })
    }
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddTaskView)
