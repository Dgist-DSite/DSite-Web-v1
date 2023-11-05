import {styled} from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 42rem;
  @media screen and (max-width: 42rem) {
    width: 100vw;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  margin-left: auto;
`