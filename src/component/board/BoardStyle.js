import {styled} from 'styled-components';

export const BoardContainer = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  border: 1.5px solid #D0D7DE;
  margin: 1rem 0;
  cursor: pointer;
`;

export const BoardImage = styled.img`
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 1.5px solid #D0D7DE;
  border-radius: 50%;
`
export const BoardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-wrap: wrap;
  text-align: left;
  padding-left: 20px;
`

export const BoardUserContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin: 16px 0 4px 16px;
  @media screen and (max-width: 44rem) {
    margin: 16px 0;
  }
`

export const BoardContentContainer = styled.a`
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
  margin: 8px;
  
  &:visited {
    color: black;
  }
`

export const BoardThumbnale = styled.img`
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