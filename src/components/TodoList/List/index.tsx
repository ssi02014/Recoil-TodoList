import React from "react";
import { useRecoilState } from "recoil";
import { Todo, todosState } from "../../../recoil/todo";
import TodoItem from "../Item";

const TodoList = () => {
  const [todos, setTodos] = useRecoilState<Todo[]>(todosState);
  console.log(todos);

  return (
    <>
      {todos.length > 0 &&
        todos.map((todo, idx) => <TodoItem key={todo.id} todo={todo} />)}
    </>
  );
};

export default TodoList;
