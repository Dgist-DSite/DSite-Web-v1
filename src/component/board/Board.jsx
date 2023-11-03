import {
  BoardContainer,
  BoardContentContainer, BoardDetail,
  BoardImage,
  BoardInfoContainer,
  BoardThumbnale,
  BoardUserContainer, BodyContainer, TitleContainer
} from "./BoardStyle";
import React from "react";
import {Body, Label, Title} from "../common/TextStyle";

export default function Board({ model }) {
    return (
      <BoardContainer>
          <BoardUserContainer>
            <BoardImage src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRda07wG6u9LV0GR46yH2Y2PZjIA6wP_BWzArLzCWv1VVWe_TT_m01EXPBBW8osOu5fgk4&usqp=CAU"}/>
            <BoardInfoContainer>
              {/*<Label>{model.category}</Label>*/}
              <TitleContainer>
                <Title>{model.user}</Title>
              </TitleContainer>
              <BodyContainer>
                <Body>{model.createdAt}</Body>
              </BodyContainer>
            </BoardInfoContainer>
          </BoardUserContainer>
          <BoardContentContainer>
            <BoardThumbnale src={"https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"}/>
            <BoardDetail>
              <Title>타이틀임</Title>
              <Body>내용임</Body>
              <Label>velog.con</Label>
            </BoardDetail>
          </BoardContentContainer>
      </BoardContainer>
    )
}