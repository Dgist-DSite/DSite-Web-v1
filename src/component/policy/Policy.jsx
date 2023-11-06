import ReactMarkdown from "react-markdown";
import {MarkdownContainer} from "./PolicyStyle";

export default function Policy() {
  return (
    <MarkdownContainer>
      <ReactMarkdown>
        {`## Dgist **개인정보 처리방침**
  
  ### **1. 수집항목**
  
  회원 정보를 수집하지 않습니다.
  
  ### **2. 개인정보 수집 및 이용목적**
  
  회원 정보를 수집하지 않습니다.
  
  ### **3. 개인정보의 보유 및 이용기간**
  
  회원 정보를 보유하지 않습니다.
  
  ### **4-1. 개인정보의 파기절차**
  
  회원이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어집니다. 일정기간 저장된 개인정보는 법령에 의한 경우를 제외하고는 보유 목적 이외의 다른 목적으로 이용되지 않습니다.
  
  ### **4-2. 개인정보의 파기방법**
  
  전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
  
  ### **5. 개인정보 제공**
  
  회원 정보가 없으므로 개인 정보를 제공하지 않습니다.`}
      </ReactMarkdown>

    </MarkdownContainer>
  )
}