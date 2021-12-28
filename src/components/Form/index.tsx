import React from "react";
import Button from "../Button";
import { FormWrapper } from "./style";

const Form = () => {
  return (
    <FormWrapper>
      <input type="text" id="task" name="task" />
      <Button>추가</Button>
    </FormWrapper>
  );
};

export default Form;
