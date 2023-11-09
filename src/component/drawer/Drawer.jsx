import {
  ButtonContainer,
  DrawerContainer,
  InfoContainer,
  InputContainer,
  NodeBoardContainer,
  SubmitContainer
} from "./DrawerStyle";
import {DefaultButton, TransparentButton} from "../common/ButtonStyle";
import {useEffect, useState} from "react";
import NodeBoard from "../nodeboard/NodeBoard";
import {DefaultInput} from "../common/InputStyle";
import {Body, Label, Title} from "../common/TextStyle";
import {addNodeBoard} from "../../service/Service";
import Empty from "../empty/Empty";

export default function Drawer({category, clickedNode, nodeBoards, isDrawer, setIsDrawer, addNodeCallback}) {

  const [url, setUrl] = useState('');

  return (
    <DrawerContainer style={{
      right: !isDrawer ? '-35rem' : '0rem'
    }}>
      <ButtonContainer>
        <TransparentButton
          onClick={() => {
            setIsDrawer(i => !i);
          }}
          style={{
            fontSize: '18px',
            color: '#aaa',
            display: "flex",
            alignItems: 'center',
          }}>
          닫기
        </TransparentButton>
      </ButtonContainer>
      <InfoContainer>
        <Body>{category}</Body>
        <Title>{clickedNode ? clickedNode.text : ""}</Title>
        <Body
          style={{
            marginTop: '0.5rem'
          }}>{clickedNode ? clickedNode.description : ""}</Body>
      </InfoContainer>
      <InputContainer>
        <DefaultInput placeholder={'링크를 적어주세요'} value={url} onChange={e => setUrl(e.target.value)}/>
      </InputContainer>
      <SubmitContainer>
        <DefaultButton
          onClick={() => {
            addNodeCallback(url);
            setUrl('');
          }}>
          <Body>업로드</Body>
        </DefaultButton>
      </SubmitContainer>
      <NodeBoardContainer>
        {!nodeBoards.length ? <Empty title={'처음으로 블로그를 공유해 보세요!'}/>: null}
        {nodeBoards.map((i) => (
          <ul key={i.id}>
            <NodeBoard model={i} callback={() => {
            }}></NodeBoard>
          </ul>
        ))}
      </NodeBoardContainer>
    </DrawerContainer>
  );
};