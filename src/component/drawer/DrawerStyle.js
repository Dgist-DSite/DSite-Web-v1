import {styled} from "styled-components";

export const DrawerContainer = styled.div`
  position: fixed;
  width: 35rem;
  height: 100vh;
  right: 0;
  overflow: scroll;
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

export const InputContainer = styled.div`
  padding: 1rem;
`

export const SubmitContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

export const NodeBoardContainer = styled.li`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem 0 0 1rem;
`