import {DefaultButton} from "../common/ButtonStyle";
import {Body} from "../common/TextStyle";
import {ButtonContainer, PostContainer} from "./PostStyle";


export default function Post({ close }) {
  return (
    <PostContainer>

      <ButtonContainer>
        <DefaultButton color={'#D0D7DE'} onClick={() => close()}>
          <Body>닫기</Body>
        </DefaultButton>
      </ButtonContainer>

      <div>input...</div>

      <div>submit...</div>

    </PostContainer>
  )
}