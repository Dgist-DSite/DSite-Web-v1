import {ButtonContainer, DrawerContainer} from "./DrawerStyle";
import {DefaultButton, TransparentButton} from "../common/ButtonStyle";
import {useEffect, useState} from "react";
import NodeBoard from "../nodeboard/NodeBoard";

export default function Drawer({nodeBoards, isDrawer, setIsDrawer}) {

  return (
    <DrawerContainer style={{
      right: !isDrawer ? '-35rem' : '0rem'
    }}>
      <ButtonContainer>
        <TransparentButton
          onClick={() => {
            setIsDrawer(i => !i)
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
      <li>
        {nodeBoards.map((i) =>(
          <NodeBoard model={i} callback={() => {}}></NodeBoard>
        ))}
      </li>
    </DrawerContainer>
  );
};