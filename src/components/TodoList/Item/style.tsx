import styled from "@emotion/styled";

export const TodoItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 7px 0;
  border-bottom: 1px solid #fff;

  p {
    color: #fff;
    display: flex;
    align-items: center;
  }

  div {
    display: flex;
  }

  button {
    margin-right: 5px;
    padding: 4px 7px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
