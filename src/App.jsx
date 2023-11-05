import {useEffect, useState} from "react";
import Board from "./component/board/Board";
import {
  AppContainer,
  ButtonContainer,
  LeftNav,
  MainContainer,
  NavContainer, RailContainer,
  RightNav,
  TitleContainer
} from "./AppStyle";
import {Body, LargeTitle, Title} from "./component/common/TextStyle";
import {dgsiteAxios, getNews, getPosts} from "./service/Service";
import {DefaultButton} from "./component/common/ButtonStyle";
import DisplayAds from "./component/adsense/DisplayAds";

function App() {
  const [list, setList] = useState([{
    category: "서버",
    content: "content",
    description: "해당 글은 '스프링 입문을 위한 자바 객체지향의 원리와 이해'를 참고하여 작성되었습니다. 객체지향의 개념은 알고 있으나, 잘못된 정의를 통해 학습한 내용을 바로잡아봅시다.",
    image: "https://images.velog.io/velog.png",
    regDate: "2023-11-04T18:44:03.877771",
    title: "객체 지향 다시 살펴보기 - 잘못된 지식을 바로잡아보자",
    url: "https://velog.io/@eora21/%EA%B0%9D%EC%B2%B4-%EC%A7%80%ED%96%A5-%EB%8B%A4%EC%8B%9C-%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0-%EC%9E%98%EB%AA%BB%EB%90%9C-%EC%A7%80%EC%8B%9D%EC%9D%84-%EB%B0%94%EB%A1%9C%EC%9E%A1%EC%95%84%EB%B3%B4%EC%9E%90",
    userName: "양예성"
  }]);

  useEffect(() => {
    // getNews()
    //   .then(() => {
    //
    //   })
  }, []);

  useEffect(() => {
    getPosts()
      .then((i) => {
        const lst = i.data.data
        setList(lst)
      })
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
              <Body>블로그 공유</Body>
            </DefaultButton>
          </ButtonContainer>
        </RightNav>
      </NavContainer>
      <RailContainer>
      </RailContainer>
      <MainContainer>
        <li>
          <DisplayAds />
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
