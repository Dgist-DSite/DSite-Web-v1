import {styled} from "styled-components";

export const DrawerContainer = styled.div`
  position: fixed;
  width: 35rem;
  height: 100vh;
  right: 0;
  z-index: 2;
  flex-direction: column;
  background-color: white;
  border-left: 2px solid #ddd;
  @media screen and (max-width: 35rem) {
    width: 100vw;
    border-left: none;
  }
  transition: right 1s;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-content: flex-start;
`