import {styled} from "styled-components";

export const DefaultButton = styled.a`
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${props => props.color ? props.color : '#f68809'};
  color: white;

  transition: background-color 0.2s;
  &:hover {
    background-color: ${props => props.color ? props.color : '#c46e0a'};
  }

  &:active {
    background-color: ${props => props.color ? props.color : '#985202'};
  }
`;

export const SelectButtonStyle = styled.button`
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  background-color: white;
  color: black;
`
export const TransparentButton = styled.button`
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  background-color: white;
  color: black;
`