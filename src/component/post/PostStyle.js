import {styled} from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 36rem;
  align-items: center;
  @media screen and (max-width: 36rem) {
    width: 100vw;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  margin-left: auto;
`


export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  align-items: flex-start;
  margin: 12px;
  gap: 4px;
  
  @media screen and (max-width: 36rem) {
    width: 100%;
  }
`

export const Select = styled.select`
  border: none;
  padding: 12px;
  border-radius: 4px;
  background-color: #f1f1f1;
`

export const Option = styled.option`
  
`

export const SelectLabel = styled.label`
  
`