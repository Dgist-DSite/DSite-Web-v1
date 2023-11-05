import {
  BoardContainer,
  BoardContentContainer, BoardDetail,
  BoardImage,
  BoardInfoContainer,
  BoardThumbnale,
  BoardUserContainer, BodyContainer, DetailBodyContainer, DetailLabelContainer, DetailTitleContainer, TitleContainer
} from "./BoardStyle";
import React from "react";
import {Body, Label, Title} from "../common/TextStyle";

export default function Board({ model, callback }) {
  let url = new URL(model.url)

  return (
    <BoardContainer onClick={() => callback()}>
        <BoardUserContainer>
          <BoardImage src={"https://hook-s3-innosync.s3.ap-northeast-2.amazonaws.com/images/initUserImage.png"}/>
          <BoardInfoContainer>
            <TitleContainer>
              <Title>{model.userName}</Title>
            </TitleContainer>
          </BoardInfoContainer>
        </BoardUserContainer>
        <BoardContentContainer href={model.url} target="_blank">
          <BoardThumbnale src={model.image}/>
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
        </BoardContentContainer>
        <BodyContainer>
          <Body>{model.regDate}</Body>
        </BodyContainer>
    </BoardContainer>
  )
}