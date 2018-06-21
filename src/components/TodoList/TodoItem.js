import { connect } from 'react-redux';

import TodoItemView from './TodoItemView';
import {
  deleteTodo,
  markTodoAsComplete
} from '../../actions/todos.js';

const mapStateToProps = (state, ownProps) => {
  return {
    todo: state.todos[ownProps.id],
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    completeItem: () => dispatch(markTodoAsComplete(ownProps.id)),
    deleteTodoItem: () => dispatch(deleteTodo(ownProps.id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoItemView);
