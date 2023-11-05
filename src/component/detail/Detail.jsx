import {DefaultButton} from "../common/ButtonStyle";
import {Body, Label, Title} from "../common/TextStyle";
import 'react-toastify/dist/ReactToastify.css';
import React, {useEffect} from "react";
import {ButtonContainer, ContentContainer, DetailContainer, TitleContainer} from "./DetailStyle";
import {
  BoardContentContainer, BoardDetail,
  BoardImage,
  BoardInfoContainer,
  BoardThumbnale,
  BoardUserContainer, BodyContainer, DetailBodyContainer, DetailLabelContainer, DetailTitleContainer
} from "../board/BoardStyle";

export default function Detail({ model, close }) {
  console.log(model);
  let url = new URL(model.url)

  useEffect(() => {
  }, []);
  return (
    <DetailContainer>
      <ButtonContainer>
        <DefaultButton color={'#D0D7DE'} onClick={() => close()}>
          <Body>닫기</Body>
        </DefaultButton>
      </ButtonContainer>
      <BoardUserContainer>
        <BoardImage src={"https://i.namu.wiki/i/EbJbfjm1JTDuv60L4JG11Fo27mXgNVvm2unFSzQ8ejK6kcDLNnhyRLYr2VoeO_akensh64iyoe0AGoqVR4Ucqw.webp"}/>
        <BoardInfoContainer>
          <TitleContainer>
            <Title>{model.userName}</Title>
          </TitleContainer>
        </BoardInfoContainer>
      </BoardUserContainer>

      <ContentContainer>
        <Title>
          {model.content}
        </Title>
      </ContentContainer>

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
    </DetailContainer>
  )
}