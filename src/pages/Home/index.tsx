import React, { useCallback, useRef } from "react";
import Form from "../../components/Form";
import TodoList from "../../components/TodoList/List";
import TodoTemplate from "../../components/TodoList/Template";
import TodoTitle from "../../components/TodoList/Title";
import { inputState, Todo, todosState } from "../../recoil/todo";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const Home = () => {
  const [contents, setContents] = useRecoilState<string>(inputState);
  const todos = useRecoilValue<Todo[]>(todosState);
  const setTodos = useSetRecoilState<Todo[]>(todosState);

  const id = useRef(3);

  const addTodo = useCallback(
    (e) => {
      e.preventDefault();

      const todo: Todo = {
        id: (id.current += 1),
        contents,
        isCompleted: false,
      };
      setTodos([...todos, todo]);
    },
    [contents, todos]
  );

  const onChange = useCallback((e) => {
    const { value } = e.target;
    setContents(value);
  }, []);

  return (
    <>
      <TodoTemplate>
        <TodoTitle />
        <Form addTodo={addTodo} onChange={onChange} />
        <TodoList />
      </TodoTemplate>
    </>
  );
};

export default Home;
