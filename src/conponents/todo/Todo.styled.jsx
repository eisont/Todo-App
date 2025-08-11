import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin: 10px 0;
  width: 1000px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Bt = styled.button`
  background: none;
  outline: none;
  border: none;
`;

export const BtFlex = styled.div`
  padding: 0 10px;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 10px;
  box-shadow: 1px 1px 15px #aeaeae;
`;

export const TodoInput = styled.input`
  font-size: 20px;
`;

export const TodoContent = styled.div`
  font-size: 20px;
  outline: none;
  border: none;
`;
