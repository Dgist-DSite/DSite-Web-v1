import {styled} from "styled-components";

export const RoadmapContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f4f4f4;
  position: relative;
  margin-left: 14rem;

  min-width: 100rem;
  min-height: 150rem;

  @media screen and (max-width: 58rem) {
    margin-left: 7rem;
  }

  @media screen and (max-width: 44rem) {
    margin-left: 0;
  }

`

export const NodeParent = styled.button`
  position: absolute;
  width: 9rem;
  height: 2.8rem;
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  z-index: 1;
`

export const SuperNode = styled(NodeParent)`
  background-color: #f68809;
  border-radius: 1000px;
  color: white;
  box-shadow: 1px 1px 4px #cccccc;
`


export const NewSuperNode = styled(SuperNode)`
  opacity: 0.75;
  z-index: 2;
`

export const ChildNode = styled(NodeParent)`
  background-color: white;
  border: 2px solid #ddd;
`

export const NewChildNode = styled(ChildNode)`
  opacity: 0.75;
  z-index: 2;
`;

export const NodeContainer = styled.div`
  position: relative;
`

export const PathContainer = styled.div`
  position: absolute;
  background-color: transparent;
  border-style: solid;
  border-radius: 8px;
  pointer-events: none;
`

export const CategorySelectorContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  z-index: 10000;
`

export const Select = styled.select`
  border: none;
  padding: 12px;
  border-radius: 4px;
  background-color: white;
  margin-top: 0.7rem;
`

export const PathSelector = styled(NodeParent)`
  background-color: transparent;
  border: 1.5px solid #097ff6;
  border-radius: 0;
  z-index: 10;
`

export const Input = styled.input`
  height: 2rem;
  background-color: white;
`

export const FormContainer = styled.div`
  position: fixed;
  display: flex;
  text-align: center;
  margin: 20px;
`