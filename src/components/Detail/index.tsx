import React from "react";
import { Number, Row, Column, Month, Icon } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingUsd,
  faReceipt,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import Title from "../Title";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";

interface IDetail {
  title: string;
  value: number;
}

function Detail({ title, value }: IDetail) {
  const month: string = useSelector<any, string>((state) => state.auth.month);
  const loading: boolean = useSelector<any, boolean>(
    (state) => state.dashboard.loading
  );

  return (
    <Row>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <Column>
            <Title>{title}</Title>
            <Number>R$ {value.toFixed(2)}</Number>
            <Month>{month}</Month>
          </Column>
          <Icon>
            <FontAwesomeIcon
              style={{ height: 100, width: 100 }}
              icon={
                title === "Entrada"
                  ? faHandHoldingUsd
                  : title === "Saída"
                  ? faReceipt
                  : faDollarSign
              }
            />
          </Icon>
        </>
      )}
    </Row>
  );
}

export default Detail;
