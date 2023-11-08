import {Divider, RailContainer, TextContainer} from "./RailStyle";
import {Body, Title} from "../common/TextStyle";

export default function Rail({ text }) {
  return (
    <RailContainer>
      <Title style={{
        color: '#555',
        fontWeight: 'normal'
      }}>
        {text}
      </Title>
      <Divider/>
    </RailContainer>
  )
}