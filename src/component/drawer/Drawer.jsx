import {ButtonContainer, DrawerContainer} from "./DrawerStyle";
import {DefaultButton, TransparentButton} from "../common/ButtonStyle";

export default function Drawer({ isDrawer, setIsDrawer }) {
  return (
    <DrawerContainer style={{
      right: !isDrawer ? '-35rem' : '0rem'
    }}>
      <ButtonContainer>
        <TransparentButton
          onClick={() => {setIsDrawer(i => !i)}}
          style={{
            fontSize: '18px',
            color: '#aaa',
            display: "flex",
            alignItems: 'center',
          }}>
          닫기
        </TransparentButton>
      </ButtonContainer>
    </DrawerContainer>
  );
}