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
import Post from "./component/post/Post";

function App() {
  const [list, setList] = useState([{
    userName: "양예성",
    url: "https://velog.io/@eora21/%EA%B0%9D%EC%B2%B4-%EC%A7%80%ED%96%A5-%EB%8B%A4%EC%8B%9C-%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0-%EC%9E%98%EB%AA%BB%EB%90%9C-%EC%A7%80%EC%8B%9D%EC%9D%84-%EB%B0%94%EB%A1%9C%EC%9E%A1%EC%95%84%EB%B3%B4%EC%9E%90",
    content: "content",
    category: "서버",
    title: "객체 지향 다시 살펴보기 - 잘못된 지식을 바로잡아보자",
    image: "https://images.velog.io/velog.png",
    description: "해당 글은 '스프링 입문을 위한 자바 객체지향의 원리와 이해'를 참고하여 작성되었습니다. 객체지향의 개념은 알고 있으나, 잘못된 정의를 통해 학습한 내용을 바로잡아봅시다.",
    regDate: "17시간 전"}
  ]);

  useEffect(() => {
    // TODO : getNews
    // getNews()
    //   .then(() => {
    //
    //   })
  }, []);

  useEffect(() => {
    // getPosts()
    //   .then((i) => {
    //     const lst = i.data.data
    //     lst.forEach((i) => {
    //       const current = new Date();
    //       const regDate = new Date(i.regDate)
    //       i.regDate = getTimeAgo(current, regDate);
    //       console.log(i)
    //     })
    //     setList(lst)
    //   })
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
              <Post close={() => setModalOpen(false)}/>
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
