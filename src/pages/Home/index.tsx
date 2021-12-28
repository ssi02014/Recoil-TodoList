import React, { useCallback, useRef } from "react";
import Form from "../../components/Form";
import TodoList from "../../components/TodoList/List";
import TodoTemplate from "../../components/TodoList/Template";
import TodoTitle from "../../components/TodoList/Title";
import { inputState, Todo, todosState } from "../../recoil/todo";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const Home = () => {
  const [contents, setContents] = useRecoilState<string>(inputState);
  const [todos, setTodos] = useRecoilState<Todo[]>(todosState);

  const id = useRef(0);

  const addTodo = useCallback(
    (e) => {
      e.preventDefault();

      if (!contents) return;

      const todo: Todo = {
        id: (id.current += 1),
        contents,
        isCompleted: false,
      };

      setTodos([...todos, todo]);
      onReset();
    },
    [contents, todos]
  );

  const onChange = useCallback((e) => {
    const { value } = e.target;
    setContents(value);
  }, []);

  const onReset = useCallback(() => {
    setContents("");
  }, []);

  return (
    <>
      <TodoTemplate>
        <TodoTitle />
        <Form contents={contents} addTodo={addTodo} onChange={onChange} />
        <TodoList todos={todos} />
      </TodoTemplate>
    </>
  );
};

export default Home;
