import * as S from './Todo.styled';
import { useState } from 'react';

const Todo = (pr) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <S.Wrapper>
      {pr.todo.check ? (
        <S.Bt onClick={() => pr.setTodoList((prev) => prev.map((el) => (el.id === pr.todo.id ? { ...el, check: !el.check } : el)))}>✅</S.Bt>
      ) : (
        <S.Bt onClick={() => pr.setTodoList((prev) => prev.map((el) => (el.id === pr.todo.id ? { ...el, check: !el.check } : el)))}>☑️</S.Bt>
      )}

      {pr.todo.check ? (
        <S.BtFlex style={{ opacity: '0.5', cursor: 'default' }}>
          <S.TodoContent>{pr.todo.content}</S.TodoContent>

          <div>
            <S.Bt> 수정하기 </S.Bt>
            <S.Bt> X </S.Bt>
          </div>
        </S.BtFlex>
      ) : (
        <S.BtFlex>
          {pr.todo.modify ? (
            <S.TodoInput value={inputValue} placeholder='수정할 문구를 입력해주세요.' onChange={(event) => setInputValue(event.target.value)} />
          ) : (
            <S.TodoContent>{pr.todo.content}</S.TodoContent>
          )}

          <div>
            {pr.todo.modify ? (
              <S.Bt
                onClick={() => {
                  pr.setTodoList((prev) => prev.map((el) => (el.id === pr.todo.id ? { ...el, content: inputValue, modify: !el.modify } : el)));
                }}
              >
                수정완료
              </S.Bt>
            ) : (
              <S.Bt
                onClick={() => {
                  pr.setTodoList((prev) => prev.map((el) => (el.id === pr.todo.id ? { ...el, content: inputValue, modify: !el.modify } : el)));
                }}
              >
                수정하기
              </S.Bt>
            )}
            <S.Bt
              onClick={() => {
                pr.setTodoList((prev) => {
                  return prev.filter((el) => el.id !== pr.todo.id);
                });
              }}
            >
              X
            </S.Bt>
          </div>
        </S.BtFlex>
      )}
    </S.Wrapper>
  );
};

export default Todo;
