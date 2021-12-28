import React from "react";
import { Todo } from "../../recoil/todo";
import Button from "../Button";
import { FormWrapper } from "./style";

interface Props {
  contents: string;
  addTodo: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Form = ({ contents, addTodo, onChange }: Props) => {
  return (
    <FormWrapper>
      <input
        type="text"
        id="content"
        name="content"
        value={contents}
        onChange={onChange}
      />
      <Button onClick={addTodo}>추가</Button>
    </FormWrapper>
  );
};

export default Form;
