import {DefaultButton} from "../common/ButtonStyle";
import {Body, Title} from "../common/TextStyle";
import {ButtonContainer, InputContainer, PostContainer, Select, Option, SelectLabel} from "./PostStyle";
import {useRef} from "react";
import {DefaultInput} from "../common/InputStyle";


export default function Post({ close }) {

  const content = useRef("");
  const url = useRef("");
  const category = useRef("");

  function onChange(e, type) {
    type.current = e.target.value;
  }

  return (
    <PostContainer>
      <ButtonContainer>
        <DefaultButton color={'#D0D7DE'} onClick={() => close()}>
          <Body>닫기</Body>
        </DefaultButton>
      </ButtonContainer>

      <InputContainer>
        <Title>카테고리</Title>
        <Select>
          <Option>카테고리 선택</Option>
          <Option>안드로이드</Option>
          <Option>서버</Option>
          <Option>iOS</Option>
          <Option>임베</Option>
        </Select>
      </InputContainer>

      <InputContainer>
        <Title>링크</Title>
        <DefaultInput placeholder={'링크를 적어주세요'} ref={url} onChange={(e) => onChange(e, url)}/>
      </InputContainer>

      <InputContainer>
        <Title>내용</Title>
        <DefaultInput placeholder={'간단한 설명을 적어주세요'} ref={content} onChange={(e) => onChange(e, content)}/>
      </InputContainer>



      <DefaultButton>
        <Body>업로드</Body>
      </DefaultButton>

    </PostContainer>
  )
}