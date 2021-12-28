import styled from "@emotion/styled";
import { color } from "../../config/colorSystem";

export const StyledButton = styled.button`
  width: 100%;
  background-color: #fff;
  outline: none;
  border: 1px solid #fff;

  &:hover {
    background-color: #bbcef0;
    border: 1px solid #2a65c9;
    cursor: pointer;
  }
`;
