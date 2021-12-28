import React from "react";
import Button from "../Button";
import { Dimmend } from "../Common";
import Form from "../Form";
import { ModalWrapper } from "./style";

interface Props {
  data: {
    id: number;
    isOpen: boolean;
    contents: string;
  };
  onEdit: (e: any) => void;
  // onEdit: (id: number, contents: string) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Modal = ({ data, onEdit, onChange }: Props) => {
  return (
    <>
      {data.isOpen && (
        <Dimmend>
          <ModalWrapper>
            <Form>
              <input
                type="text"
                id="contents"
                name="contents"
                value={data.contents}
                onChange={onChange}
              />
              <Button onClick={onEdit}>수정</Button>
            </Form>
          </ModalWrapper>
        </Dimmend>
      )}
    </>
  );
};

export default Modal;
