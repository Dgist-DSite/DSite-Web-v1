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
  z-index: 100;
  border: 1px solid #D0D7DE;
  display: flex;
  align-items: center;
  min-width: 400px;
  justify-content: space-between;
`

export const TitleContainer = styled(Link)`
  margin-left: 30px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
`

export const ImageContainer = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 100px;
  margin-right: 12px;
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
  z-index: 50;
  border: 1px solid #D0D7DE;
  @media screen and (max-width: 58rem) {
    width: 7rem;
  }
  
  @media screen and (max-width: 44rem) {
    width: 100vw;
    height: 4rem;
    flex-direction: row;
    bottom: 0;
    padding-top: 0;
  }
`

export const Container = styled.div`
  padding-top:  4rem;
`

export const LinkContainer = styled(Link)`
  text-decoration: none;
  @media screen and (max-width: 44rem) {
    width: 100%;
  }
`

export const TopContainer = styled.div`
  @media screen and (max-width: 44rem) {
    min-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
`
export const BottomContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 44rem) {
    display: none;
  }
  margin-top: auto;
`