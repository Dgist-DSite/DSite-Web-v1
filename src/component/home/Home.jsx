import {Constant} from "../../util/Constant";
import {DefaultButton, SelectButtonStyle} from "../common/ButtonStyle";
import {Body, Title} from "../common/TextStyle";
import Modal from "../modal/Modal";
import Detail from "../detail/Detail";
import Board from "../board/Board";
import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getBoards, getBoardsByCategory} from "../../service/Service";
import {getTimeAgo} from "../../util/Time";
import {BoardContainer, ButtonContainer, MainContainer, SettingContainer} from "./HomeStyle";


const dummyList = [
  // {
  //   userName: "test",
  //   image: "",
  //   url: "http://google.com",
  //   content: "content"
  // }
]

export default function Home() {

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
    handleCategory(selectedCategory);
  }

  function handleBoardModalClose() {
    setBoardModalOpen(false)
    handleCategory(selectedCategory);
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
      })
      .catch(e => {

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

  const [isPostLoading, setIsPostLoading] = useState(false);

  return (
    <MainContainer>
      <ButtonContainer>
        <Modal isOpen={postModalOpen} setIsOpen={handlePostModalClose} content={
          <Post isLoading={isPostLoading} setIsLoading={(i) => {
            setIsPostLoading(i);
          }} close={() => {
            handlePostModalClose();
          }
          }/>}>
          <DefaultButton
            disabled={isPostLoading}
            color={isPostLoading ? '#fdc98d' : '#f68809'}
            onClick={() => setPostModalOpen(true)}>
            <Title>블로그 공유</Title>
          </DefaultButton>
        </Modal>
      </ButtonContainer>
      <SettingContainer>
        {["전체", ...Constant.categoryList].map((i) => (
          <SelectButtonStyle onClick={() => handleCategory(i)}>
            {<Body
              style={{
                fontWeight: selectedCategory === i ? 'bold' : 'normal',
                color: selectedCategory === i ? '#f68809' : 'black',
                fontSize: '16px'
              }}>{i}</Body>}
          </SelectButtonStyle>
        ))}
      </SettingContainer>

      <li>
        {/*<DisplayAds/>*/}
        {/*<DisplayAds/>*/}
        {/*<DisplayAds/>*/}
        {/*<DisplayAds/>*/}
        {list.map((i) =>
          <ul key={i.id}>
            <BoardContainer>
              {<Board callback={() => handleClickBoard(i)} model={i}/>}
            </BoardContainer>

          </ul>
        )}
      </li>

      <Modal isOpen={boardModalOpen} setIsOpen={handleBoardModalClose} content={
        <Detail model={clickedBoard} close={() => {
          handleBoardModalClose();
        }
        }/>}>
      </Modal>
    </MainContainer>
  );
}