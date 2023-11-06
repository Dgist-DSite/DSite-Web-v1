import {styled} from "styled-components";
import {Link} from "react-router-dom";

export const AppContainer = styled.div`
  text-align: center;
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
export const RailContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const Container = styled.div`
  padding-top:  4rem;
`

export const LinkContainer = styled(Link)`
  text-decoration: none;
`

export const TopContainer = styled.div``
export const BottomContainer = styled.div`
  margin-top: auto;
`