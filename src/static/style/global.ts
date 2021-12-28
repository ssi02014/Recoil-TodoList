import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import { color } from "../../config/colorSystem";

export const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${color.main};
  }
`;
