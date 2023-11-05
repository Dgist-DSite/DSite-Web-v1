import {Divider, RailContainer, TextContainer} from "./RailStyle";
import {Body, Title} from "../common/TextStyle";

export default function Rail({ text }) {
  return (
    <RailContainer>
      <TextContainer>
        <Title>
          {text}
        </Title>
      </TextContainer>
      <Divider/>
    </RailContainer>
  )
}