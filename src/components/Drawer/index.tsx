import React from "react";
import { Line, Wrapper, Item, Name } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTable,
  faMoneyBill,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { select } from "../../store/auth/actions";
import { Dispatch } from "redux";

interface IElements {
  name: string;
  icon: any;
  page: string;
}

const elements: Array<IElements> = [
  { name: "Dashboard", icon: faTable, page: "" },
  { name: "Meus Lucros", icon: faMoneyBill, page: "wins" },
  { name: "Meus Gastos", icon: faWallet, page: "wastes" },
];

function Drawer() {
  const dispatch = useDispatch<Dispatch<ITypeSelect>>();
  const page = useSelector((state: ApplicationService) => state.auth.page);
  const user = useSelector((state: ApplicationService) => state.auth.user);

  const change = (page: string): void => {
    dispatch(select(page));
  };

  return (
    <Wrapper>
      <Name>Olá, {user.name}</Name>
      {elements.map((e, index) => (
        <Line
          persist={e.page === page ? true : false}
          key={index}
          onClick={() => change(e.page)}
        >
          <FontAwesomeIcon icon={e.icon} />
          <Item>{e.name}</Item>
        </Line>
      ))}
    </Wrapper>
  );
}

export default Drawer;
