import {useEffect, useState} from "react";
import Board from "./component/board/Board";
import {
  AppContainer,
  ButtonContainer,
  LeftNav,
  MainContainer, ModalBackdrop, ModalContainer,
  NavContainer, RailContainer,
  RightNav,
  TitleContainer
} from "./AppStyle";
import {Body, LargeTitle, Title} from "./component/common/TextStyle";
import {dgsiteAxios, getNews, getPosts} from "./service/Service";
import {DefaultButton} from "./component/common/ButtonStyle";
import DisplayAds from "./component/adsense/DisplayAds";
import {getTimeAgo} from "./util/Time";
import Modal from "./component/modal/Modal";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    // TODO : getNews
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

  const [modalOpen, setModalOpen] = useState(true);

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
            <Modal isOpen={modalOpen} setIsOpen={setModalOpen} content={
              <div>
                Hello World!
              </div>
            }>
              <DefaultButton onClick={() => setModalOpen(true)}>
                <Body>블로그 공유</Body>
              </DefaultButton>
            </Modal>
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
