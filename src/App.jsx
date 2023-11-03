import {useEffect, useState} from "react";
import Board from "./component/board/Board";
import {AppContainer, MainContainer, TitleContainer} from "./AppStyle";
import {LargeTitle} from "./component/common/TextStyle";
import axios from "axios";
import {dgsiteAxios} from "./service/Service";

function App() {
  const [list, setList] = useState([{
    content: "title",
    category: "A",
    url: "",
    user: "병춘",
    createdAt: "2시간"
  },{
    content: "title",
    category: "A",
    user: "병춘",
    createdAt: "2시간"
  },{
    content: "title",
    category: "A",
    user: "병춘",
    createdAt: "2시간"
  },])

  useEffect(() => {
    //  dgsiteAxios({
    //    method: 'get',
    //    url: 'all'
    // })
  }, []);

  return (
    <AppContainer>
      <MainContainer>
        <TitleContainer>
          <LargeTitle>dgsite</LargeTitle>
        </TitleContainer>
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
