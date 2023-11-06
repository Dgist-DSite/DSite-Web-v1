import {
  AppContainer, Container,
  LeftNav, LinkContainer,
  NavContainer, RailContainer,
  TitleContainer
} from "./AppStyle";
import {Title} from "./component/common/TextStyle";
import Rail from "./component/rail/Rail";
import Home from "./component/home/Home";
import {Constant, generateRailPath} from "./util/Constant";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

function App() {
  return (
    <AppContainer>
      <NavContainer>
        <LeftNav>
          <TitleContainer>
            <Title>DSite</Title>
          </TitleContainer>
        </LeftNav>
        {/*<RightNav>*/}
        {/*</RightNav>*/}
      </NavContainer>

      <RailContainer>
        {Constant.railList.map((i) => (
          <LinkContainer to={`${generateRailPath(i)}`}>
            <Rail text={i}/>
          </LinkContainer>
        ))}
      </RailContainer>
      <Container>
        <Routes>
          <Route
            path="/"
            element={<Home/>}/>
          <Route
            path='/roadmap'
            element={<div>출시 예정입니다!</div>}
          />
          <Route
            path='/conference'
            element={<div>출시 예정입니다!</div>}
          />
          <Route
            path='/itnews'
            element={<div>출시 예정입니다!</div>}
          />
        </Routes>
      </Container>
    </AppContainer>
  );
}

export default App;
