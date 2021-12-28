import React from "react";
import { Todo } from "../../recoil/todo";
import Button from "../Button";
import { FormWrapper } from "./style";

interface Props {
  children: React.ReactNode;
}
const Form = ({ children }: Props) => {
  return <FormWrapper>{children}</FormWrapper>;
};

export default Form;
