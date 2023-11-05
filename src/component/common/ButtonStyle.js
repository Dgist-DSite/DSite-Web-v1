import {styled} from "styled-components";

export const DefaultButton = styled.button`
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  background: ${props => props.color ? props.color : '#f68809'};
  color: white;

  &:hover {
    background: ${props => props.color ? props.color : '#c46e0a'};
  }

  &:active {
    background: ${props => props.color ? props.color : '#985202'};
  }
`