import React from "react";
import { TodoWrapper } from "./style";

interface Props {
  children: React.ReactDOM | React.ReactElement;
}
const TodoTemplate = ({ children }: Props) => {
  return <TodoWrapper>{children}</TodoWrapper>;
};

export default TodoTemplate;
