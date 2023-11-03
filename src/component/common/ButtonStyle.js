import {styled} from "styled-components";

export const DefaultButton = styled.button`
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  background: #f69729;
  color: white;

  &:hover {
    background: #d97d14;
  }

  &:active {
    background: #b76605;
  }
`