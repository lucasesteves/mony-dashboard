import React from "react";
import { Wrapper, Line, Item, Icon } from "./styles";
import Title from "../Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface ITable {
  list: Array<ListElement>;
  remove: any;
}

function Table({ list, remove }: ITable) {
  return (
    <Wrapper>
      <Title>Histórico</Title>
      {list.map((e, index) => (
        <Line key={index}>
          <Item>{e.name}</Item>
          <Item>R$ {e.value}</Item>
          <Icon onClick={() => remove(e._id)}>
            <FontAwesomeIcon style={{ height: 16, width: 16 }} icon={faTrash} />
          </Icon>
        </Line>
      ))}
    </Wrapper>
  );
}

export default Table;
