import React from "react";
import { TodoWrapper } from "./style";

interface Props {
  children: React.ReactNode;
}
const TodoTemplate = ({ children }: Props) => {
  return <TodoWrapper>{children}</TodoWrapper>;
};

export default TodoTemplate;
