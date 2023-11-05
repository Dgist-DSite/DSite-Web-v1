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
import {dgsiteAxios, getNews, getBoards} from "./service/Service";
import {DefaultButton} from "./component/common/ButtonStyle";
import DisplayAds from "./component/adsense/DisplayAds";
import {getTimeAgo} from "./util/Time";
import Modal from "./component/modal/Modal";
import Post from "./component/post/Post";
import Rail from "./component/rail/Rail";

function App() {
  const [list, setList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // TODO : getNews
    // getNews()
    //   .then(() => {
    //
    //   })
  }, []);

  function getBoard() {
    getBoards()
      .then((i) => {
        const lst = i.data.data
        lst.forEach((i) => {
          const current = new Date() - 32400000; // 9시간
          const regDate = new Date(i.regDate)
          i.regDate = getTimeAgo(current, regDate);
          console.log(i)
        })
        setList(lst)
      })
  }

  useEffect(() => {
    getBoard();
  }, []);


  function handlePostModalClose() {
    setModalOpen(false);
    getBoard();
  }

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
            <Modal isOpen={modalOpen} setIsOpen={handlePostModalClose} content={
              <Post close={() => {
                handlePostModalClose()
              }
              }/>}>
              <DefaultButton onClick={() => setModalOpen(true)}>
                <Body>블로그 공유</Body>
              </DefaultButton>
            </Modal>
          </ButtonContainer>
        </RightNav>
      </NavContainer>
      <RailContainer>
        <Rail text={'홈'}/>
        <Rail text={'로드맵'}/>
      </RailContainer>
      <MainContainer>
        <li>
          {/*<DisplayAds/>*/}
          {list.map((i) =>
            <ul>
              {<Board model={i}/>}
            </ul>
          )}
        </li>
      </MainContainer>
    </AppContainer>
  );
}

export default App;
