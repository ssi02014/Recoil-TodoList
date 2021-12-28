import React, { useCallback, useRef, useState } from "react";
import Form from "../../components/Form";
import TodoList from "../../components/TodoList/List";
import TodoTemplate from "../../components/TodoList/Template";
import TodoTitle from "../../components/TodoList/Title";
import { inputState, Todo, todosState } from "../../recoil/todo";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Modal from "../../components/Modal";
import Button from "../../components/Button";

const Home = () => {
  const [contents, setContents] = useRecoilState<string>(inputState);
  const [todos, setTodos] = useRecoilState<Todo[]>(todosState);
  const [modal, setModal] = useState({
    isOpen: false,
    contents: "",
    id: 0,
  });

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

  const onDelete = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onEdit = useCallback(
    (e) => {
      e.preventDefault();
      setTodos(
        todos.map((todo) => {
          if (todo.id === modal.id) {
            todo = { ...todo, contents: modal.contents };
          }
          return todo;
        })
      );
      setModal({ ...modal, isOpen: false });
    },
    [todos, modal]
  );

  const onReset = useCallback(() => {
    setContents("");
  }, []);

  const onModal = useCallback(
    (todo) => {
      setModal({
        ...modal,
        isOpen: !modal.isOpen,
        contents: todo.contents,
        id: todo.id,
      });
    },
    [modal]
  );

  const onModalChange = useCallback(
    (e) => {
      const { value } = e.target;
      setModal({
        ...modal,
        contents: value,
      });
    },
    [modal]
  );

  return (
    <>
      <TodoTemplate>
        <TodoTitle />
        <Form>
          <input type="text" value={contents} onChange={onChange} />
          <Button onClick={addTodo}>추가</Button>
        </Form>
        <TodoList
          todos={todos}
          onDelete={onDelete}
          onModal={onModal}
          isOpenModal={modal.isOpen}
        />
      </TodoTemplate>
      <Modal data={modal} onChange={onModalChange} onEdit={onEdit} />
    </>
  );
};

export default Home;
