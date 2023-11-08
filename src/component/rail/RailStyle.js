import {styled} from "styled-components";

export const RailContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  cursor: pointer;
  background-color: white;
  height: 4rem;
  padding-left: 1rem;

  @media screen and (max-width: 58rem) {
    align-items: center;
    align-content: center;
    justify-content: center;
    margin-left: 0;
  }
  
  transition: background-color 0.2s;

  &:hover {
    background-color: #f1f1f1;
  }

  &:active {
    background-color: #ddd;
  }
`

export const TextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Divider = styled.div`
  width: 88%;
  height: 1px;
  background: #f1f1f1;
  margin: 0 auto;
  @media screen and (max-width: 44rem) {
    display: none;
  }
`
