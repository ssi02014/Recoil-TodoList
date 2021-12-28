import React from "react";
import { useRecoilState } from "recoil";
import { Todo, todosState } from "../../../recoil/todo";
import TodoItem from "../Item";

interface Props {
  todos: Todo[];
}
const TodoList = ({ todos }: Props) => {
  return (
    <>
      {todos.length > 0 ? (
        todos.map((todo, idx) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <p style={{ textAlign: "center", color: "#fff" }}>
          리스트가 비어있습니다.
        </p>
      )}
    </>
  );
};

export default TodoList;
