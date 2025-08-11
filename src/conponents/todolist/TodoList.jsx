import * as S from './TodoList.styled';
import Todo from '../todo/Todo';

const TodoList = (pr) => {
  return (
    <S.TodoListUl>
      {pr.todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} setTodoList={pr.setTodoList} />
      ))}
    </S.TodoListUl>
  );
};

export default TodoList;
