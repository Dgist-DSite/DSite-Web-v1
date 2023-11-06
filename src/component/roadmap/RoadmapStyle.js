import {styled} from "styled-components";

export const RoadmapContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f4f4f4;
  position: relative;
  padding-left: 14rem;

  min-width: 100rem;
  min-height: 100rem;

  @media screen and (max-width: 58rem) {
    padding-left: 7rem;
  }

  @media screen and (max-width: 44rem) {
    padding-left: 0;
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

export const Node = styled(NodeParent)`
  background-color: #f68809;
  border-radius: 1000px;
  color: white;
  box-shadow: 1px 1px 4px #cccccc;

  &:hover {
    background-color: #d77504;
  }
`

export const DetailNode = styled(NodeParent)`
  cursor: pointer;
  background-color: white;
  border: 2px solid #ddd;

  &:hover {
    background-color: #eeeeee;
  }
`

export const NodeContainer = styled.div`
  position: relative;
`

export const PathContainer = styled.div`
  position: absolute;
  background-color: transparent;
  border-style: solid;
  border-radius: 8px;
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