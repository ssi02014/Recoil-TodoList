import React from "react";
import { Todo } from "../../../recoil/todo";
import Button from "../../Button";
import { TodoItemWrapper } from "./style";

interface Props {
  todo: Todo;
  onDelete: (id: number) => void;
}
const TodoItem = ({ todo, onDelete }: Props) => {
  return (
    <TodoItemWrapper>
      <p>{todo.contents}</p>
      <div>
        <Button>수정</Button>
        <Button onClick={() => onDelete(todo.id)}>삭제</Button>
      </div>
    </TodoItemWrapper>
  );
};

export default TodoItem;
