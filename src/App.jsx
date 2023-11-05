import {useEffect, useState} from "react";
import Board from "./component/board/Board";
import {
  AppContainer,
  ButtonContainer,
  LeftNav,
  MainContainer,
  NavContainer, RailContainer,
  RightNav, SettingContainer,
  TitleContainer
} from "./AppStyle";
import {Body, Title} from "./component/common/TextStyle";
import {getNews, getBoards, getBoardsByCategory} from "./service/Service";
import {DefaultButton, SelectButtonStyle} from "./component/common/ButtonStyle";
import DisplayAds from "./component/adsense/DisplayAds";
import {getTimeAgo} from "./util/Time";
import Modal from "./component/modal/Modal";
import Post from "./component/post/Post";
import Rail from "./component/rail/Rail";
import Detail from "./component/detail/Detail";
import {Constant} from "./util/Constant";

const dummyList = [
  // {
  //   userName: "test",
  //   image: "",
  //   url: "http://google.com",
  //   content: "content"
  // }
]

function App() {
  const [list, setList] = useState(dummyList);
  const [clickedBoard, setClickedBoard] = useState(null);
  const [postModalOpen, setPostModalOpen] = useState(false);
  const [boardModalOpen, setBoardModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('전체');

  useEffect(() => {
    // TODO : getNews
    // getNews()
    //   .then(() => {
    //
    //   })
  }, []);

  useEffect(() => {
    getAllBoard();
  }, []);

  function handlePostModalClose() {
    setPostModalOpen(false);
    getAllBoard();
  }

  function handleBoardModalClose() {
    setBoardModalOpen(false)
    getAllBoard();
  }

  function handleClickBoard(board) {
    setClickedBoard(board);
    setBoardModalOpen(true);
  }

  function getAllBoard() {
    getBoards()
      .then((i) => {
        const lst = i.data.data;
        registerBoard(lst);
      });
  }


  function handleCategory(i) {
    setSelectedCategory(i);
    if (i === '전체') {
      getAllBoard();
    } else {
      getBoardsByCategory(i)
        .then((r) => {
          registerBoard(r.data.data);
        })
        .catch((e) => {
          registerBoard([]);
        });
    }
  }

  function registerBoard(boards) {
    boards.forEach((i) => {
      const current = new Date() - 32400000; // 9시간
      const regDate = new Date(i.regDate);
      i.regDate = getTimeAgo(current, regDate);
    });
    setList(boards);
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
            <Modal isOpen={postModalOpen} setIsOpen={handlePostModalClose} content={
              <Post close={() => {
                handlePostModalClose()
              }
              }/>}>
              <DefaultButton onClick={() => setPostModalOpen(true)}>
                <Body>블로그 공유</Body>
              </DefaultButton>
            </Modal>
          </ButtonContainer>
        </RightNav>
      </NavContainer>
      <RailContainer>
        <Rail text={'홈'}/>
        <Rail text={'로드맵'}/>
        <Rail text={'컨퍼런스'}/>
        <Rail text={'IT 뉴스'}/>
      </RailContainer>
      <MainContainer>
        <SettingContainer>
          {["전체", ...Constant.categoryList].map((i) => (
            <SelectButtonStyle onClick={() => handleCategory(i)}>
              {selectedCategory === i
                ? <Body style={{fontWeight: 'bold', color: '#f68809'}}>{i}</Body>
                : <Body>{i}</Body>}
            </SelectButtonStyle>
          ))}
        </SettingContainer>

        <Modal isOpen={boardModalOpen} setIsOpen={handleBoardModalClose} content={
          <Detail model={clickedBoard} close={() => {
            handleBoardModalClose();
          }
          }/>}>
        </Modal>
        <li>
          {/*<DisplayAds/>*/}
          {/*<DisplayAds/>*/}
          {/*<DisplayAds/>*/}
          {/*<DisplayAds/>*/}
          {list.map((i) =>
            <ul>
              {<Board callback={(i) => handleClickBoard(i)} model={i}/>}
            </ul>
          )}
        </li>
      </MainContainer>
    </AppContainer>
  );
}

export default App;
