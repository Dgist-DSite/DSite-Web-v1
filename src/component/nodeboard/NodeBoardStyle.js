import {styled} from 'styled-components';

export const NodeBoardContainer = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background: #fff;
  cursor: pointer;
  border: none;
`;

export const NodeBoardImage = styled.img`
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 1.5px solid #D0D7DE;
  border-radius: 50%;
`
export const NodeBoardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-wrap: wrap;
  text-align: left;
  padding-left: 20px;
`

export const NodeBoardUserContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin: 16px 0 4px 16px;
  @media screen and (max-width: 44rem) {
    margin: 16px 0;
  }
`

export const NodeBoardContentContainer = styled.a`
  border: 1.5px solid #D0D7DE;
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-wrap: wrap;
  background: #f1f1f1;
  color: black;
  width: calc(100% - 1rem);
  margin: 0 8px;
  
  &:visited {
    color: black;
  }
`

export const NodeBoardThumbnale = styled.img`
  width: 100%;
  min-height: 4rem;
  border-radius: 10px;
`

export const BoardDetail = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  text-align: left;
  padding: 8px;
  position: absolute;
  width: 100%;
  background: #f1f1f1;
  bottom: 0;
  border-radius: 0 0 10px 10px;
`

export const TitleContainer = styled.div`
  margin-top: 4px;
`

export const BodyContainer = styled.div`
  display: flex;
  color: #656D76;
  align-items: flex-start;
  padding: 0 0 8px 12px;
`

export const DetailTitleContainer = styled.div`
  width: 100%;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  display: -webkit-box;`

export const DetailBodyContainer = styled.div`
  width: 100%;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  display: -webkit-box;
`

export const DetailLabelContainer = styled.div`
  width: 100%;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  display: -webkit-box;
`