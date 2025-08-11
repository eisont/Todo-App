// 1. 수정 버튼을 클릭한 경우에만 `input`이 보이도록 코드를 작성해보세요.
// 2. 할일 완료상태를 체크할 수 있는 요소를 추가해보세요.
// 3. Todo 앱의 제목을 표시하는 헤더를 추가해보세요.
// 4. 작성된 Todo-App의 레이아웃을 정렬해보세요. (flex/grid 권장)
// 5. 수정/추가/삭제 버튼을 디자인 해보세요.
// 6. 자유롭게 적용해보고 싶은 CSS를 작성해보세요.

import { useState } from 'react';
import TodoHeader from './conponents/TodoHeader';
import TodoInput from './conponents/todoinput/TodoInput';
import TodoList from './conponents/todolist/TodoList';
import './App.css';
import styled from '@emotion/styled';

const Wrapper = styled.div``;

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 0, content: '123', modify: false, check: false },
    { id: 1, content: '코딩 공부하기', modify: false, check: false },
    { id: 2, content: '잠 자기', modify: false, check: false },
  ]);

  return (
    <Wrapper>
      <TodoHeader />
      <hr />
      <TodoInput todoList={todoList} setTodoList={setTodoList} />
      <hr />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </Wrapper>
  );
};

export default App;
