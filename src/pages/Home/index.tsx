import React from "react";
import Form from "../../components/Form";
import TodoList from "../../components/TodoList/List";
import TodoTemplate from "../../components/TodoList/Template";
import TodoTitle from "../../components/TodoList/Title";

const Home = () => {
  return (
    <>
      <TodoTemplate>
        <TodoTitle />
        <Form />
        <TodoList />
      </TodoTemplate>
    </>
  );
};

export default Home;
