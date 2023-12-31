import {
  AppContainer, BottomContainer, Container, ImageContainer,
  LeftNav, LinkContainer,
  NavContainer, RailContainer,
  TitleContainer, TopContainer
} from "./AppStyle";
import {Title} from "./component/common/TextStyle";
import Rail from "./component/rail/Rail";
import Home from "./component/home/Home";
import {Constant, generateBottomRailPath, generateTopRailPath} from "./util/Constant";
import {Route, Routes} from "react-router-dom";
import Policy from "./component/policy/Policy";
import {Divider} from "./component/rail/RailStyle";
import Roadmap from "./component/roadmap/Roadmap";
import Logo from './logo.png'

function App() {
  return (
    <AppContainer>
      <NavContainer>
        <LeftNav>
          <TitleContainer to={`/`}>
            <ImageContainer src={Logo}>

            </ImageContainer>
            <Title>DSite</Title>
          </TitleContainer>
        </LeftNav>
      </NavContainer>

      <RailContainer>
        <TopContainer>
          {Constant.topRailList.map((i) => (
            <LinkContainer to={`${generateTopRailPath(i)}`}>
              <Rail text={i}/>
            </LinkContainer>
          ))}
        </TopContainer>
        <BottomContainer>
          <Divider/>

          {Constant.bottomRailList.map((i) => (
            <LinkContainer to={`${generateBottomRailPath(i)}`}>
              <Rail text={i}/>
            </LinkContainer>
          ))}
        </BottomContainer>
      </RailContainer>
      <Container>
        <Routes>
          <Route
            path="/"
            element={<Home/>}/>
          <Route
            path='/roadmap'
            element={<Roadmap/>}
          />
          <Route
            path='/conference'
            element={<div>출시 예정입니다!</div>}
          />
          <Route
            path='/itnews'
            element={<div>출시 예정입니다!</div>}
          />
          <Route
            path='/policy'
            element={<Policy/>}
          />
          <Route
            path='/roadmap-mobile'
            element={<Roadmap/>}
          />
        </Routes>
      </Container>
    </AppContainer>
  );
}

export default App;
