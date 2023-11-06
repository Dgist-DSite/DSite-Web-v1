import {styled} from "styled-components";

export const AppContainer = styled.div`
  text-align: center;
`


export const MainContainer = styled.div`
  width: 30rem;
  text-align: center;
  padding-top: 4rem;
  margin: 0 auto;
  list-style: none;

  min-width: 300px;

  @media screen and (max-width: 30rem) {
    width: 100vw;
  }
`

export const NavContainer = styled.div`
  height: 4rem;
  width: 100vw;
  background: white;
  position: fixed;
  z-index: 2;
  border: 1px solid #D0D7DE;
  display: flex;
  align-items: center;
  min-width: 220px;
  justify-content: space-between;
`

export const TitleContainer = styled.div`
  margin-left: 30px;
  cursor: pointer;
`

export const LeftNav = styled.div`
    
`

export const RightNav = styled.div`

`

export const ButtonContainer = styled.div`
  margin-right: 30px;
`

export const RailContainer = styled.div`
  padding-top: 4rem;
  position: fixed;
  height: 100vh;
  width: 14rem;
  background: white;
  z-index: 1;
  border: 1px solid #D0D7DE;
  @media screen and (max-width: 58rem) {
    width: 7rem;
  }
  
  @media screen and (max-width: 44rem) {
    display: none;
  }
`

export const SettingContainer = styled.div`
  display: flex;
  padding-top: 1rem;
  width: 100%;
  align-content: center;
  margin: 0 auto;
  overflow: scroll;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
`