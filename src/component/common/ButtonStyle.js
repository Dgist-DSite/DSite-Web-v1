import {styled} from "styled-components";

export const DefaultButton = styled.button`
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  background: ${props => props.color ? props.color : '#d97d14'};
  color: white;

  &:hover {
    background: ${props => props.color ? props.color : '#d97d14'};
  }

  &:active {
    background: ${props => props.color ? props.color : '#d97d14'};
  }
`