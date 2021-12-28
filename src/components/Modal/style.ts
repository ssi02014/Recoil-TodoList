import styled from "@emotion/styled";
import { color } from "../../config/colorSystem";

export const ModalWrapper = styled.div`
  min-width: 400px;
  background-color: ${color.main};
  padding: 20px;
  border-radius: 8px;

  form {
    margin-bottom: 0;
  }
`;
