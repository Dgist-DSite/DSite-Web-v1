import {
  NodeBoardContainer,
  NodeBoardContentContainer, BoardDetail,
  NodeBoardImage,
  NodeBoardInfoContainer,
  NodeBoardThumbnale,
  NodeBoardUserContainer, BodyContainer, DetailBodyContainer, DetailLabelContainer, DetailTitleContainer, TitleContainer
} from "./NodeBoardStyle";
import React, {useEffect, useState} from "react";
import {Body, Label, Title} from "../common/TextStyle";
import errorImage from './dummy.png';

export default function NodeBoard({ model, callback }) {
  let url = new URL(model.url);
  const [imageSrc, setImageSrc] = useState(model.imgUrl);

  return (
    <NodeBoardContainer onClick={() => callback()}>
        {/*<BoardUserContainer>*/}
          {/*<BoardImage src={"https://hook-s3-innosync.s3.ap-northeast-2.amazonaws.com/images/initUserImage.png"}/>*/}
          {/*<BoardInfoContainer>*/}
            {/*<TitleContainer>*/}
            {/*  <Title>{model.userName}</Title>*/}
            {/*</TitleContainer>*/}
          {/*</BoardInfoContainer>*/}
        {/*</BoardUserContainer>*/}
        <NodeBoardContentContainer href={model.url} target="_blank">
          <NodeBoardThumbnale onError={(e) => {
            console.log(model.title);
            setImageSrc(errorImage);
          }} src={imageSrc}/>
          <BoardDetail>
            <DetailTitleContainer>
              <Title>{model.title}</Title>
            </DetailTitleContainer>
            <DetailBodyContainer>
              <Body>{model.description}</Body>
            </DetailBodyContainer>
            <DetailLabelContainer>
              <Label>{url.host}</Label>
            </DetailLabelContainer>
          </BoardDetail>
        </NodeBoardContentContainer>
        <BodyContainer>
          <Body>{model.regDate}</Body>
        </BodyContainer>
    </NodeBoardContainer>
  )
}