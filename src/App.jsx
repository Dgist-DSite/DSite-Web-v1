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
import {getTimeAgo} from "./util/Time";

function App() {
  const [list, setList] = useState([]);

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
        lst.forEach((i) => {
          const current = new Date();
          const regDate = new Date(i.regDate)
          i.regDate = getTimeAgo(current, regDate);
        })
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
