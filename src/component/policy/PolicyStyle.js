import {styled} from "styled-components";

export const MarkdownContainer = styled.div`
  line-height: 2rem;
  margin: 4rem 4rem 0 20rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 100vh;
  text-align: left;
  
  @media screen and (max-width: 58rem) {
    margin: 4rem 4rem 0 10rem;
  }
  
  @media screen and (max-width: 44rem) {
    margin: 4rem 1rem 0 1rem;
  }
`