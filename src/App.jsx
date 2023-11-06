import {
  AppContainer,
  LeftNav,
  NavContainer, RailContainer,
  TitleContainer
} from "./AppStyle";
import {Title} from "./component/common/TextStyle";
import Rail from "./component/rail/Rail";
import Home from "./component/home/Home";
import {Constant} from "./util/Constant";

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
          <Rail text={i}/>
        ))}
      </RailContainer>
      <Home/>
    </AppContainer>
  );
}

export default App;
