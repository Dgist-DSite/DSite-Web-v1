import {styled} from "styled-components";

export const AppContainer = styled.div`
  text-align: center;
`

export const MainContainer = styled.div`
  width: 40rem;
  text-align: center;
  margin: 0 auto;
  list-style: none;

  min-width: 300px;

  @media screen and (max-width: 40rem) {
    width: 100vw;
  }
`

export const TitleContainer = styled.div`
  text-align: left;
  padding: 20px;
`