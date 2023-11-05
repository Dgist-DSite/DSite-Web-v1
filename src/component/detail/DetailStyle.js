import {styled} from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 36rem;
  @media screen and (max-width: 36rem) {
    width: 100vw;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  margin-left: auto;
`
export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 12px;
  align-items: flex-start;
`