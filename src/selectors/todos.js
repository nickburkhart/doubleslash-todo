import { fromJS } from 'immutable';

export const selectTodos = (state) => {
  return fromJS(state.todos)
    .map((todo, id) => todo.set('id', id))
    .sort((t1, t2) => new Date(t1.get('created')) - new Date(t2.get('created')))
    .toJS();
}
