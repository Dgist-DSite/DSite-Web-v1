import {styled} from "styled-components";

export const MainContainer = styled.div`
  width: 30rem;
  text-align: center;
  margin: 0 auto;
  list-style: none;

  min-width: 280px;
  @media screen and (max-width: 30rem) {
    width: 100vw;
  }
`


export const ButtonContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  margin-top: 0.76rem;
  margin-right: 2rem;
  z-index: 200;
  @media screen and (max-width: 44rem) {
    margin-right: 1rem;
  }
`


export const SettingContainer = styled.div`
  display: flex;
  width: 100%;
  align-content: center;
  margin: 0 auto;
  overflow: scroll;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const BoardContainer = styled.div`
  margin-bottom: 1rem;
`