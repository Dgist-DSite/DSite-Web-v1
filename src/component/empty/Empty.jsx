import {EmptyContainer} from "./EmptyStyle";
import {Title} from "../common/TextStyle";

export default function Empty({title}) {
  return (
    <EmptyContainer>
      <Title>{title}</Title>
    </EmptyContainer>
  );
};