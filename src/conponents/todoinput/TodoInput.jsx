import * as S from './TodoInput.styled';
import { useState } from 'react';

const TodoInput = (pr) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <S.InputText value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      <S.PlusBt
        onClick={() => {
          const newTodo = { id: Number(new Date()), content: inputValue };
          const newTodoList = [newTodo, ...pr.todoList];
          pr.setTodoList(newTodoList);
          setInputValue('');
        }}
      >
        +
      </S.PlusBt>
    </>
  );
};

export default TodoInput;
