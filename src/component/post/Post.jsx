import {DefaultButton} from "../common/ButtonStyle";
import {Body, Title} from "../common/TextStyle";
import {ButtonContainer, InputContainer, PostContainer, Select, Option, SelectLabel} from "./PostStyle";
import {useRef, useState} from "react";
import {DefaultInput} from "../common/InputStyle";
import {dgsiteAxios, uploadBoard} from "../../service/Service";
import {toast, ToastContainer} from "react-toastify";
import {isValidUrl} from "../../util/Url";
import 'react-toastify/dist/ReactToastify.css';
import {Constant} from "../../util/Constant";

export default function Post({ close }) {
  const warnNotify = (msg) => toast.warning(msg);
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [isPosted, setIsPosted] = useState(false);

  function onChange(e, func) {
    func(e.target.value);
  }

  function submit() {
    if (url === '') {
      warnNotify('url을 적어주세요');
      return;
    } else if (content === '') {
      warnNotify('내용을 적어주세요');
      return;
    }
    if (isPosted) {
      warnNotify('잠시만 기다려주세요..');
      return;
    }
    setIsPosted(true);
    uploadBoard(content, category, url)
      .then((i) => {
        const data = i.data
        setTimeout(() => {
          setIsPosted(false);
        }, 5000);
        close()
      })
    .catch((e) => {
      warnNotify('유효한 url을 적어주세요');
    })
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
        <Select onChange={(e) => {setCategory(e.target.value)}} value={category}>
          {Constant.categoryList.map((i) => (
            <Option value={i} key={i}>{i}</Option>
          ))}
        </Select>
      </InputContainer>

      <InputContainer>
        <Title>링크</Title>
        <DefaultInput placeholder={'링크를 적어주세요'} value={url} onChange={(e) => onChange(e, setUrl)}/>
      </InputContainer>

      <InputContainer>
        <Title>내용</Title>
        <DefaultInput placeholder={'간단한 설명을 적어주세요'} value={content} onChange={(e) => onChange(e, setContent)}/>
      </InputContainer>



      <DefaultButton onClick={() => submit()}>
        <Body>업로드</Body>
      </DefaultButton>
      <ToastContainer/>
    </PostContainer>


  )
}