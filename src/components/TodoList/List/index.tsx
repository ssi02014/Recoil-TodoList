import React from "react";
import { useRecoilState } from "recoil";
import { Todo, todosState } from "../../../recoil/todo";
import TodoItem from "../Item";

interface Props {
  todos: Todo[];
  onDelete: (id: number) => void;
}
const TodoList = ({ todos, onDelete }: Props) => {
  return (
    <>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
        ))
      ) : (
        <p style={{ textAlign: "center", color: "#fff" }}>
          리스트가 비어있습니다.
        </p>
      )}
    </>
  );
};

export default TodoList;
