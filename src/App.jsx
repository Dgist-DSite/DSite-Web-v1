import {useEffect, useState} from "react";
import Board from "./component/board/Board";
import {
  AppContainer,
  ButtonContainer,
  LeftNav,
  MainContainer,
  NavContainer,
  RightNav,
  TitleContainer
} from "./AppStyle";
import {Body, LargeTitle, Title} from "./component/common/TextStyle";
import axios from "axios";
import {dgsiteAxios} from "./service/Service";
import {DefaultButton} from "./component/common/ButtonStyle";

function App() {
  const [list, setList] = useState([{
    content: "title",
    category: "Android",
    url: "",
    user: "병춘",
    createdAt: "2시간 전"
  },{
    content: "title",
    category: "Android",
    user: "병춘",
    createdAt: "2시간 전"
  },{
    content: "title",
    category: "Android",
    user: "병춘",
    createdAt: "2시간 전"
  }])

  useEffect(() => {
    //  dgsiteAxios({
    //    method: 'get',
    //    url: 'all'
    // })
  }, []);

  return (
    <AppContainer>
      <NavContainer>
        <LeftNav>
          <TitleContainer>
            <Title>DSite</Title>
          </TitleContainer>
        </LeftNav>
        <RightNav>
          <ButtonContainer>
            <DefaultButton>
              <Body>글쓰기</Body>
            </DefaultButton>
          </ButtonContainer>
        </RightNav>
      </NavContainer>
      <MainContainer>
        <li>
          {list.map((i) =>
            <ul>
              {<Board model={i}/> }
            </ul>
          )}
        </li>
      </MainContainer>
    </AppContainer>
  );
}

export default App;
