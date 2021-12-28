import React from "react";
import Button from "../Button";
import { FormWrapper } from "./style";

interface Props {
  addTodo: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Form = ({ addTodo, onChange }: Props) => {
  return (
    <FormWrapper>
      <input type="text" id="task" name="task" onChange={onChange} />
      <Button onClick={addTodo}>추가</Button>
    </FormWrapper>
  );
};

export default Form;
